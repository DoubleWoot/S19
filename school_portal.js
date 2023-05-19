let role = prompt("Enter Role: ");
role = role.toLowerCase();
let username = prompt("Enter Username: ");
let password = prompt("Enter Password: ");

function login(){
    if(typeof username === "string" && typeof role === "string" && typeof password === "string"){

        if(role == "admin"){
            console.log("Welcome back to the class portal, admin!");
        }
        else if(role == "teacher"){
            console.log("Thank you for logging in, teacher!");
            gradeInput();
        }
        else if(role == "student"){
            console.log("Welcome to the class portal, student!");
            gradeInput();
        }
        else{
            console.log("Role out of range.");
        }
    }
}

function gradeInput(){
    console.log("\n===Average Grade Calculator===");
    let userInput1 = parseInt(prompt("Enter first score: "));
    let userInput2 = parseInt(prompt("Enter second score: "));
    let userInput3 = parseInt(prompt("Enter third score: "));
    let userInput4 = parseInt(prompt("Enter fourth score: "));
    grade(userInput1, userInput2, userInput3, userInput4);
}

function grade(grade1, grade2, grade3, grade4){
    let average = (grade1 + grade2 + grade3 + grade4) / 4;

    if(average >= 96 && average <= 100){
        if(role == "teacher"){
            console.log("Hello teacher, your average is:", Math.round(average), "\nand your grade is A+");
        }else if(role == "student"){
            console.log("Hello student, your average is:", Math.round(average), "\nand your grade is A+");
        }
    }
    else if(average >= 90 && average <= 95){
        if(role == "teacher"){
            console.log("Hello teacher, your average is:", Math.round(average), "\nand your grade is A");
        }else if(role == "student"){
            console.log("Hello student, your average is:", Math.round(average), "\nand your grade is A");
        }
    }
    else if(average >= 85 && average <= 89){
        if(role == "teacher"){
            console.log("Hello teacher, your average is:", Math.round(average), "\nand your grade is B");
        }else if(role == "student"){
            console.log("Hello student, your average is:", Math.round(average), "\nand your grade is B");
        }
    }
    else if(average <= 74){
        if(role == "teacher"){
            console.log("Hello teacher, your average is:", Math.round(average), "\nand your grade is F");
        }else if(role == "student"){
            console.log("Hello student, your average is:", Math.round(average), "\nand your grade is F");
        }
    }
}

login();
