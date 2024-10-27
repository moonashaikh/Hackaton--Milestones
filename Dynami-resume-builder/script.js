var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page load
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cellNo = document.getElementById('cell No').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //   generate resume dnamicall
    var resumeHTML = "\n  <h2><b>Resume</b><h2>\n  <h3> personnel Information <h3>\n  <p><b>Name:</b>".concat(name, "</p>\n  <p><b>Email:</b>").concat(email, "</p>\n  <p><b>CellNo:</b>").concat(cellNo, "</p>\n\n  <h3> Education <h3>\n  <p>").concat(education, "</p>\n\n  <h3> Experience <h3>\n  <p>").concat(experience, "</p>\n\n  <h3> Skills <h3>\n  <p>").concat(skills, "</p>\n    ");
    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("resumeDisplayElemt is missing");
    }
});
