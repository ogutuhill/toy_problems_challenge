function gradeStudentMarks() {
    let marks = prompt("Enter the student's marks (between 0 and 100):");   //User is prompted to enter marks

    marks = Number(marks); //Input must be a number

//Input is validation
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    // Determines the grade based on the marks inputs
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

     alert(`The grade for marks ${marks} is: ${grade}`);  // didplays the grade
}

 gradeMarks();  //invokes the function

