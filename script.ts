document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeContainer = document.getElementById("resume") as HTMLDivElement;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const profilePicture = (document.getElementById("profile-picture") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
    const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
    const username = (document.getElementById("username") as HTMLInputElement).value;

    const resumeData = {
      name,
      email,
      profilePicture,
      education,
      skills,
      workExperience
    };

    // Generate the resume
    resumeContainer.innerHTML = `
      <section class="personal-info">
        <img src="${profilePicture}" alt="Profile Picture">
        <h1 contenteditable="true" class="editable">${name}</h1>
        <p contenteditable="true" class="editable">Contact Details: ${email}</p>
      </section>
      <section class="education">
        <h2>Education</h2>
        <p contenteditable="true" class="editable">${education}</p>
      </section>
      <section class="skills">
        <h2>Skills</h2>
        <ul contenteditable="true" class="editable">
          ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
      </section>
      <section class="work-experience">
        <h2>Work Experience</h2>
        <p contenteditable="true" class="editable">${workExperience}</p>
      </section>
    `;

    // Send request to serverless function to generate URL
    const response = await fetch('/api/generateURL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, resume: resumeData })
    });

    const data = await response.json();
    const resumeLink = document.createElement('p');
    resumeLink.innerHTML = `Your resume link: <a href="${data.url}" target="_blank">${data.url}</a>`;
    resumeContainer.appendChild(resumeLink);
  });

  const downloadButton = document.getElementById("download-pdf") as HTMLButtonElement;

  downloadButton.addEventListener("click", () => {
    const resumeElement = resumeContainer.innerHTML;
    const blob = new Blob([resumeElement], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    a.click();
    URL.revokeObjectURL(url);
  });
});
