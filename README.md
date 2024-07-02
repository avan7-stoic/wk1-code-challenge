# wk1-code-challenge
thee code challenge
//CHALLENGE ONE: Student Grade Generator.
1. There's the 'function' part(function getStudentGrade()). this is where the input and output tasks are performed.
2. Next the "prompt" is introduced. The student is prompted to enter their marks
   you'll also notice there's a while loop introduced,this prompts the student to enter valid digits (between 0-100)
3. next we assign the student's input their grade. How you ask? using if and else if and else statements.
4. finally comes the console.log where JS outputs the grade.
5. We call the function at the bottom.

//CHALLENGE TWO: The Speed Detector.
1. As written in canvas, the function is always important and it's that that we've began with.("function checkkSpeed(speed)"). So the car's speed will be the input.
2. Next we set the speed limit by defining it as a constant .Why?,because the speed limit will not change.
3. Thereafter we set the demerit points for those driving within the speed limit to zero
4. Calculating the demerit points! Remember when we were using math? Yeah.In this case we're going to use the formula Math.ceil((speed-speedLimit)/5).This will calculate the difference above the speed limit and divide it by five and will round off the answer to get the demerit points.
If the demerit points are zero(0) the console will print "Ok"
If the demerit points are above 12, then it will print "License suspended"
Otherwise it will just print the points and the demerit points.
5. there at the "prompt" is where we prompt the user for speed.
6. Finally we call the function and pass the users speed as an argument.

//CHALLENGE THREE: Net Salary Calculator.
1. As always the function input will start off as it is the one that will input the calculate net salary function and perform the actions.
2. The prompt is where we prompt te user for their basic salary and benefits.
3. There is the gross salary where we add the user's basic salary and benefits.
4. Then there is the tax rate where we input the tax rate of a certain amount of salary of the user in this case "30"
5. Then comes the NHIF Contribution and Deductions and the NSSF Contribution and Deduction  respectively where there's the Math.min formula so as to deduct the maximum of the given value.
6. We then write the formula of payee to calculate it by multiplying gross salary by tax rate.
7. And here comes Net salary and we find it by subtracting the payee, NHIF deductions, NSSF as well from the gross salary.
8. We finally call the function which is 'calculateNetSalary'