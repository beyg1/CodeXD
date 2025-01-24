let userName = "Ahmed";
let passWord = 111;
let securityCode = 789;
 
if (userName == "Bilal") {
  console.log("Please wait, authenticating security code..");
  if(securityCode == 456){
    console.log(`Hi ${userName}, Your Password is ${passWord}`); 
  }
  else {
    console.log("Security code authentication failed.");
  }
} else if  (userName == "Ahmed") {
  console.log("Please wait, authenticating security code..");
  if(securityCode == 789){
    console.log(`Hi ${userName}, Your Password is ${passWord}`); 
  }
  else {
    console.log("Security code authentication failed.");
  }
} else {
  console.log("Invalid Username or Password");
}
