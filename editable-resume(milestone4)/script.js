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
    var resumeHTML = "\n  <h2><b>Editable Resume</b><h2>\n  <h3> personnel Information <h3>\n  <p><b>Name:</b>\"<span contenteditable=\"true\">".concat(name, "</span></p>\n  <p><b>Email:</b>\"<span contenteditable=\"true\">").concat(email, "</span></p>\n  <p><b>CellNo:</b>\"<span contenteditable=\"true\">").concat(cellNo, "</span></p>\n\n  <h3> Education: <h3>\n  <p contenteditable=\"true\">").concat(education, "</p>\n\n  <h3> Experience:<h3>\n  <p contenteditable=\"true\">").concat(experience, "</p>\n\n  <h3> Skills :<h3>\n  <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("resumeDisplayElemt is missing");
    }
});
