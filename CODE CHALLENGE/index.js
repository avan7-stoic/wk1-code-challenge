//Student Grade Generator
function getStudentGrade() {
    let marks = Number(prompt('enter student marks(0-100):'));//where student will enter marks
    while(isNaN(marks)||marks<0||marks>100){
        marks=Number(prompt('invalid marks,please enter a number between 0 and 100'));//if student enters invalid marks
    }
let grade;
//we will use if else if and else statements
if (marks>=80){
    grade='A';
}else if (marks>=60){
    grade='B';
}else if (marks>=50){
    grade='C';
}else if (marks>=40){
    grade='D';
}else {
    grade='E';
}
console.log ('Student Grade:',grade);
}
getStudentGrade();//where we call the function