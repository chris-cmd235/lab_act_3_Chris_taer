//Chris Justin Taer App Dev
//Student ID: 2024-01-16777
//Base = 7

const base = 7;

//Problem 1: Grade Calculator

function calculateGrade(score){
    if (score >= 90 && score <= 100) return 'A';
    if (score >= 80 && score < 90) return 'B';
    if (score >= 70 && score < 80) return 'C';
    if (score >= 60 && score < 70) return 'D';
    if (score <= 60) return 'F';
}

const score = base * 10 + 5;
console.log("\nScore: " +score+ ", Grade: "+calculateGrade(score)+"\n");


//Problem 2: Star Pattern
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
console.log("Star Pattern for "+rows+" rows: \n");
ShowStars(rows)

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

console.log("\n Is "+base+" prime? "+isPrime(base)+" \n");

