document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeContainer = document.getElementById("resume") as HTMLDivElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const profilePicture = (document.getElementById("profile-picture") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
    const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;

    resumeContainer.innerHTML = `
      <section class="personal-info">
        <img src="${profilePicture}" alt="Profile Picture">
        <h1>${name}</h1>
        <p>Contact Details: ${email}</p>
      </section>
      <section class="education">
        <h2>Education</h2>
        <p>${education}</p>
      </section>
      <section class="skills">
        <h2>Skills</h2>
        <ul>
          ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
      </section>
      <section class="work-experience">
        <h2>Work Experience</h2>
        <p>${workExperience}</p>
      </section>
    `;
  });
});
