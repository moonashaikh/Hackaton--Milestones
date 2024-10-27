
    const form = document.getElementById('resume-form') as HTMLFormElement;
  
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
    
    // handle form submission
    form.addEventListener('submit' , (event: Event)=>{
      event.preventDefault();    //prevent page load
      const name = (document.getElementById('name') as HTMLInputElement).value
      const email = (document.getElementById('email') as HTMLInputElement).value
      
      const cellNo = (document.getElementById('cell No') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
      const experience = (document.getElementById('experience') as HTMLInputElement).value
      const skills = (document.getElementById('skills') as HTMLInputElement).value
    //   generate resume dnamicall

    const resumeHTML =`
  <h2><b>Generate Resume</b><h2>
  <h3> personnel Information <h3>
  <p><b>Name:</b>${name}</p>
  <p><b>Email:</b>${email}</p>
  <p><b>CellNo:</b>${cellNo}</p>

  <h3> Education <h3>
  <p>${education}</p>

  <h3> Experience <h3>
  <p>${experience}</p>

  <h3> Skills <h3>
  <p>${skills}</p>
    `;

    // Display generated resume

    if(resumeDisplayElement){
      resumeDisplayElement.innerHTML = resumeHTML;

    } else{
      console.error(`resumeDisplayElemt is missing`)
    }
    })
    

    
  
      
  
