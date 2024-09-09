var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeContainer = document.getElementById("resume");
    form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
        var name, email, profilePicture, education, skills, workExperience, username, resumeData, response, data, resumeLink;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    name = document.getElementById("name").value;
                    email = document.getElementById("email").value;
                    profilePicture = document.getElementById("profile-picture").value;
                    education = document.getElementById("education").value;
                    skills = document.getElementById("skills").value.split(",");
                    workExperience = document.getElementById("work-experience").value;
                    username = document.getElementById("username").value;
                    resumeData = {
                        name: name,
                        email: email,
                        profilePicture: profilePicture,
                        education: education,
                        skills: skills,
                        workExperience: workExperience
                    };
                    // Generate the resume
                    resumeContainer.innerHTML = "\n      <section class=\"personal-info\">\n        <img src=\"".concat(profilePicture, "\" alt=\"Profile Picture\">\n        <h1 contenteditable=\"true\" class=\"editable\">").concat(name, "</h1>\n        <p contenteditable=\"true\" class=\"editable\">Contact Details: ").concat(email, "</p>\n      </section>\n      <section class=\"education\">\n        <h2>Education</h2>\n        <p contenteditable=\"true\" class=\"editable\">").concat(education, "</p>\n      </section>\n      <section class=\"skills\">\n        <h2>Skills</h2>\n        <ul contenteditable=\"true\" class=\"editable\">\n          ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n      </section>\n      <section class=\"work-experience\">\n        <h2>Work Experience</h2>\n        <p contenteditable=\"true\" class=\"editable\">").concat(workExperience, "</p>\n      </section>\n    ");
                    return [4 /*yield*/, fetch('/api/generateURL', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ username: username, resume: resumeData })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    resumeLink = document.createElement('p');
                    resumeLink.innerHTML = "Your resume link: <a href=\"".concat(data.url, "\" target=\"_blank\">").concat(data.url, "</a>");
                    resumeContainer.appendChild(resumeLink);
                    return [2 /*return*/];
            }
        });
    }); });
    var downloadButton = document.getElementById("download-pdf");
    downloadButton.addEventListener("click", function () {
        var resumeElement = resumeContainer.innerHTML;
        var blob = new Blob([resumeElement], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        a.click();
        URL.revokeObjectURL(url);
    });
});
