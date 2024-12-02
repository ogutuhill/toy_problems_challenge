// Function calculates payee
function calculateTax(income) {
    if (income <= 24000) {
        return income * 0.1; // 10%
    } else if (income <= 32333) {
        return (24000 * 0.1) + ((income - 24000) * 0.25); // 25% above 24000 up to 32333
    } else {
        return (24000 * 0.1) + (8333 * 0.25) + ((income - 32333) * 0.3); // 30% above 32333
    }
}

// Function calculates NHIF deductions
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } 

    else if (grossSalary <= 7999) {
        return 300;
    } 

    else if (grossSalary <= 11999) {
        return 400;
    } 

    else if (grossSalary <= 14999) {
        return 500;
    } 

    else if (grossSalary <= 19999) {
        return 600;
    } 

    else if (grossSalary <= 24999) {
        return 750;
    } 

    else if (grossSalary <= 29999) {
        return 850;
    }

    else if (grossSalary <= 34999) {
        return 900;
    } 

    else if (grossSalary <= 39999) {
        return 950;
    } 

    else if (grossSalary <= 44999) {
        return 1000;
    } 

    else if (grossSalary <= 49999) {
        return 1100;
    } 

    else if (grossSalary <= 59999) {
        return 1200;
    } 

    else if (grossSalary <= 69999) {
        return 1300;
    } 

    else if (grossSalary <= 79999) {
        return 1400;
    } 

    else if (grossSalary <= 89999) {
        return 1500;
    } 

    else if (grossSalary <= 99999) {
        return 1600;
    } 
    
    else {
        return 1700;
    }
}

// Function calculates NSSF deductions
function calculateNSSF(grossSalary) {
    return grossSalary <= 18000 ? grossSalary * 0.06 : 1080; // Max contribution is 1080 (6% of 18000)
}

// Main function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let tax = calculateTax(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let netSalary = grossSalary - tax - nhif - nssf;

    return {
        grossSalary: grossSalary,
        tax: tax,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

let basicSalary = 50000; // Input basic salary
let benefits = 10000;    // Input benefits

const result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: KES " + result.grossSalary);
console.log("PAYE (Tax): KES " + result.tax);
console.log("NHIF: KES " + result.nhif);
console.log("NSSF: KES " + result.nssf);
console.log("Net Salary: KES " + result.netSalary);