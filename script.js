document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeContainer = document.getElementById("resume");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var profilePicture = document.getElementById("profile-picture").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value.split(",");
        var workExperience = document.getElementById("work-experience").value;
        resumeContainer.innerHTML = "\n      <section class=\"personal-info\">\n        <img src=\"".concat(profilePicture, "\" alt=\"Profile Picture\">\n        <h1>").concat(name, "</h1>\n        <p>Contact Details: ").concat(email, "</p>\n      </section>\n      <section class=\"education\">\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n      </section>\n      <section class=\"skills\">\n        <h2>Skills</h2>\n        <ul>\n          ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n      </section>\n      <section class=\"work-experience\">\n        <h2>Work Experience</h2>\n        <p>").concat(workExperience, "</p>\n      </section>\n    ");
    });
});
