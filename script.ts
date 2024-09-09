document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.createElement("button");
    toggleSkillsButton.textContent = "Toggle Skills";
    document.body.appendChild(toggleSkillsButton);
  
    const skillsSection = document.querySelector(".skills") as HTMLElement;
  
    toggleSkillsButton.addEventListener("click", () => {
      if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
      } else {
        skillsSection.style.display = "none";
      }
    });
  });
  