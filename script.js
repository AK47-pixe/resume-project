document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsButton = document.createElement("button");
    toggleSkillsButton.textContent = "Toggle Skills";
    document.body.appendChild(toggleSkillsButton);
    var skillsSection = document.querySelector(".skills");
    toggleSkillsButton.addEventListener("click", function () {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    });
});
