const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function gradeStudentMarks(marks) {
    studentGrade = parseFloat(marks);

//Input is validation
    if (isNaN(studentGrade) || studentGrade < 0 || studentGrade > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        
    }

    // Determines the grade based on the marks inputs
    if (marks > 79) {
        console.log("Grade: A");

    } else if (marks >= 60) {
        console.log("Grade: B")

    } else if (marks >= 50) {
        console.log("Grade: C");

    } else if (marks >= 40) {
        console.log("Grade: D");

    } else {
        console.log("Grade: E");
    }
}

function promptUser() {
    rl.question("Enter the marks now (0-100) or press esc' to quit: ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Exiting the program.");
            rl.close(); //closing input prompt
        } else {
            grading(input); 
            promptUser(); // calling itself to loop
        }
    });
}
promptUser();
