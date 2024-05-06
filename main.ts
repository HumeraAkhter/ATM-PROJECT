import inquirer from "inquirer" ;

//initialize user balance and pin cod
let myBalance = 10000;
let mypin = 1234;

// print welcome message
console.log("welcome to code with Humera-ATM Machine");

let pinAnswer = await  inquirer .prompt(
    [    
       {
            name : "pin",
            type : "number",
            message : " Enter your pin code :" 
        }
    ]    
);

    
    

if (pinAnswer.pin === mypin){
    console.log("correct pin code!!!");
  //  console.log(`current Account Balance is ${myBalance}`)

   let operationAns =await inquirer.prompt(
       [   
           {
               name: "operation",
               message:"please select option",
                type:"list",
                choices: ["withdraw","check balance"]
           }
       ]  
   );   

   console.log(operationAns);

   if (operationAns .operation === "withdraw"){
       let amountAns = await inquirer.prompt(
           [
                {
                    name :"amount",
                    message: "enter your amount",
                    type: "number"
            
                }
           ]
       );
       // =, -=, +=
       myBalance -= amountAns.amount;

       console.log("your remaining balance is:" + myBalance)

   }else if (operationAns.operation === "check balance"){
      console.log("your balance is:"  + myBalance)
   }

}
    else {
        console.log("incorrect pin number");
}    
        
            
            
            
            
           
       


    
    
        














        
    
 

    


    


