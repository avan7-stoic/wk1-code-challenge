//Net Salary Calculator
function calculateNetSalary(){
let basicSalary=Number(prompt('Enter basic salary:'));
let benefits=Number(prompt('Enter benefits:'));
let grossSalary=basicSalary+benefits;
const taxRate=30;
const NHIFRate=30;
const NHIFDeduction=Math.min(grossSalary*NHIFRate,1000);
const NSSFContribution=6000;
let NSSFDeduction=Math.min(basicSalary*30,NSSFContribution);
let payee=grossSalary*taxRate;
let netSalary=grossSalary-payee-NHIFDeduction-NSSFDeduction;
}
calculateNetSalary();