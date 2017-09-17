var baseSalary = document.querySelector("#baseSalary");
var hourlyRate = document.querySelector("#hourlyRate");
var More20 = document.querySelector("#More20");
var More60 = document.querySelector("#More60");
var More80 = document.querySelector("#More80");
var salaryArea = document.querySelector("#salaryArea");
var holidayPay = document.querySelector("#holidayPay");

var button = document.querySelector("button");

button.addEventListener("click", function(){
  if(holidayPay.checked){
var salary = baseSalary.value *1.08;
var extra20 = More20.value * hourlyRate.value * 0.20;
var extra60 = More60.value * hourlyRate.value * 0.60;
var extra80 = More80.value * hourlyRate.value * 0.80;
salaryArea.textContent =  salary + extra20 + extra60 + extra80;
}
else{
var salary = baseSalary.value *1;
var extra20 = More20.value * hourlyRate.value * 0.20;
var extra60 = More60.value * hourlyRate.value * 0.60;
var extra80 = More80.value * hourlyRate.value * 0.80;
salaryArea.textContent =  salary + extra20 + extra60 + extra80;
}

});