//Chris Justin Taer App Dev
//Student ID: 2024-01-16777
//Base = 7

const base = 7;

//Problem 1: Grade Calculator
console.log("\nProblem 1: Grade Calculator");

function calculateGrade(score){
    if (score >= 90 && score <= 100) return 'A';
    if (score >= 80 && score < 90) return 'B';
    if (score >= 70 && score < 80) return 'C';
    if (score >= 60 && score < 70) return 'D';
    if (score <= 60) return 'F';
}

const score = base * 10 + 5;
console.log("\nBase = "+base+" -> Score: " +score+ " -> Grade: "+calculateGrade(score)+"\n");

console.log("\n--------------------------------------------------------------------\n");

//Problem 2: Star Pattern 
console.log("\nProblem 2: Star Pattern\n");

function ShowStars(rows){
    let pattern = "";
    for (let i = 1; i <= rows; i++){
        for (let j = 1; j <= rows - i; j++){
            pattern += " ";
        }
        for (j = 1; j <= i; j++){
            pattern += "* "
        }
        pattern += "\n"
    }
    console.log(pattern);
}

const rows = base + 2;
console.log("Base = "+base+" -> rows = "+rows+" \n");
ShowStars(rows)

console.log("\n--------------------------------------------------------------------\n");

console.log("\nProblem 3: Prime Number Checker\n");

//Problem 3: Prime Number Checker 

function isPrime(n){
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2){
        if (n % i === 0) return false;
    }
    return true;
}

//If base = 3 → check 13 → Prime

const n = base + 10
console.log("\nBase = " + base + " -> check " + n + " -> " + (isPrime(n) ? "Prime" : "Not Prime") + " \n");

console.log("\n--------------------------------------------------------------------\n");

//Problem 4: Multiplication Table

console.log("\nProblem 4: Multiplication Table\n");

function multiplicationTable(n) {
    console.log("Multiplication Table for " + n + ":\n");
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

multiplicationTable(base);
//end
