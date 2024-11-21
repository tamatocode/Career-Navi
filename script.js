document.getElementById("generateBtn").addEventListener("click", function () {
    const careerInput = document.getElementById("careerInput").value.trim();
  
    if (!careerInput) {
      alert("Please enter a career to generate the roadmap!");
      return;
    }
  
    const roadmapResult = document.getElementById("roadmapResult");
  
    // Example Roadmap Output
    roadmapResult.innerHTML = `
      <h3>Roadmap for ${careerInput}</h3>
      <ul>
        <li><strong>Step 1:</strong> Learn the basics of ${careerInput} through foundational courses.</li>
        <li><strong>Step 2:</strong> Gain certifications (e.g., Coursera, Udemy) in ${careerInput}-related fields.</li>
        <li><strong>Step 3:</strong> Build projects and a portfolio to showcase your skills.</li>
        <li><strong>Step 4:</strong> Network with professionals and apply for internships.</li>
        <li><strong>Step 5:</strong> Transition to full-time opportunities in ${careerInput}.</li>
      </ul>
    `;
  });
  