function addEducation() {
    const educationFieldsContainer = document.getElementById('educationFields');
    
    // Create a new div for education details
    const educationField = document.createElement('div');
    educationField.classList.add('educationFieldsSet');
    educationField.innerHTML = `
        <hr>
        <label for="educationName">Name of College/School</label>
        <input type="text" id="educationName" name="educationName" placeholder="Enter Name of College/School" required>

        <label for="board">Board</label>
        <input type="text" id="board" name="board" placeholder="Enter Board" required>

        <label for="marks">Marks in %</label>
        <input type="number" id="marks" name="marks" placeholder="Enter Marks in %" required>

        <label for="graduationYear">Year of Graduation</label>
        <input type="number" id="graduationYear" name="graduationYear" placeholder="Enter Year of Graduation" required>
    `;
    
    // Append the education details to the container
    educationFieldsContainer.appendChild(educationField);
    
    // Add a line break
    educationFieldsContainer.appendChild(document.createElement('hr'));
}
