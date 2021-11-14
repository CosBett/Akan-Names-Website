const day = document.querySelector("#day").value
const month = document.querySelector("#month").value
const year = document.querySelector("#year").value

  function validateDay() {
    const message = document.getElementById("errD");
     console.log(message)
     message.innerHTML = "";
    let day = document.getElementById("day").value;
    try {
      if(day== "") throw "empty";
      day = Number(day);
      if(day <= 0) throw "Invalid";
      if(day > 31 ) throw "Invalid";
    }
    catch(err) {
      message.innerHTML = "Day is " + err;
    }
  }
  document.getElementById("day").addEventListener("change", validateDay)

  function validateMonth() {
    const message = document.getElementById("errM");
     console.log(message)
     message.innerHTML = "";
    let month = document.getElementById("month").value;
    try {
      if(month== "") throw "empty";
      month = Number(month);
      if(month <= 0) throw "Invalid";
      if(month > 12 ) throw "Invalid";
    }
    catch(err) {
      message.innerHTML = "Month is " + err;
    }
  }
  document.getElementById("month").addEventListener("change", validateMonth)

   function dayOfTheWeek(){
       let year = document.getElementById("year").value
       let yr = String(year).split("")
            .map((year)=>{
                return Number(year)
            })
       let CC = yr.slice(0,2).join("")
       let YY = yr.slice(2).join("")
       let MM= document.getElementById("month").value
       let DD = document.getElementById("day").value

       console.log('YY', YY, 'ÇC', CC, MM, DD)
  
        return ( (( parseInt(CC/4) - parseInt(2*CC-1)) + (parseInt(5*YY/4) ) + (parseInt((parseInt(26*(MM+1)))/10)) + DD )) % 7
   }
document.getElementById("subm").addEventListener("click",akanNames)
function akanNames(){
  let gender = document.querySelector('input[name="gender"]:checked')?.value
  let day = dayOfTheWeek()
  let message = document.getElementById("feedback")
  message.innerHTML = ""
  console.log(gender)
  if(day == ""){
    validateDay()
  }
  if(gender == null){
    const errMsg = document.getElementById('errG')

   errMsg.innerHTML = "";
  try {
    if(gender == null) throw "choose gender";
  }
  catch(err) {
    errMsg.innerHTML = "Please " + err;
  }
  return
  }
 
  if(gender == 'Female'){
    if(day == 0){
      message.innerHTML = "Your Akan name is Akosua"
    } 
    else if(day == 1){
      message.innerHTML = "Your Akan name is Adwoa"
    }
    else if(day == 2){
      message.innerHTML = "Your Akan name is Abenaa"
    }
    else if(day == 3){
      message.innerHTML = "Your Akan name is Akua"
    }
    else if(day == 4){
      message.innerHTML = "Your Akan name is Yaa"
    }
    else if(day == 5){
      message.innerHTML = "Your Akan name is Afua"
    }
    else if(day == 6){
      message.innerHTML = "Your Akan name is Ama"
    }}
  else {
    if(day == 0){
      message.innerHTML = "Your Akan name is Kwasi"
    } 
    else if(day == 1){
      message.innerHTML = "Your Akan name is Kwadwo"
    }
    else if(day == 2){
      message.innerHTML = "Your Akan name is Kwabena"
    }
    else if(day == 3){
      message.innerHTML = "Your Akan name is Kwaku"
    }
    else if(day == 4){
      message.innerHTML = "Your Akan name is Yaw"
    }
    else if(day == 5){
      message.innerHTML = "Your Akan name is Kofi"
    }
    else if(day == 6){
      message.innerHTML = "Your Akan name is Kwame"
    }
  } 
  console.log(gender, day)

}
function validateGender() {
  const gender = document.querySelector('input[name="gender"]:checked').value
  const errMsg = document.getElementById('errG')

   errMsg.innerHTML = "";
  try {
    if(gender == "") throw "choose gender";
  }
  catch(err) {
    errMsg.innerHTML = "Please " + err;
  }
}