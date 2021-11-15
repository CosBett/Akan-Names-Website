const day = document.querySelector("#day").value
const month = document.querySelector("#month").value
const year = document.querySelector("#year").value

function validateDay() {
  const message = document.getElementById("errD");
        console.log(message)
        message.innerHTML = "";
  let day = document.getElementById("day").value;
  try {
    if(day== "") throw "empty!";
    day = Number(day);
    if(day <= 0) throw "Invalid!";
    if(day > 31 ) throw "Invalid!";
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
    if(month== "") throw "empty!";
      month = Number(month);
    if(month <= 0) throw "Invalid!";
    if(month > 12 ) throw "Invalid!";
  }
  catch(err) {
     message.innerHTML = "Month is " + err;
  }
}
document.getElementById("month").addEventListener("change", validateMonth)

function dayOfTheWeek(){
  let year = document.getElementById("year").value
  let MM= document.getElementById("month").value
  let DD = document.getElementById("day").value

    const dayOfWeek = new Date([year, MM, DD].join("-")).getDay();    
    console.log(dayOfWeek)
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
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
    if(gender == null) throw "choose gender !";
  }
  catch(err) {
    errMsg.innerHTML = "Please " + err;
  }
  return
  }
 
  if(gender == 'Female'){
    if(day == 'Sunday'){
      message.innerHTML = "Your Akan name is Akosua"
    } 
    else if(day == 'Monday'){
      message.innerHTML = "Your Akan name is Adwoa"
    }
    else if(day == 'Tuesday'){
      message.innerHTML = "Your Akan name is Abenaa"
    }
    else if(day == 'Wednesday'){
      message.innerHTML = "Your Akan name is Akua"
    }
    else if(day == 'Thursday'){
      message.innerHTML = "Your Akan name is Yaa"
    }
    else if(day == 'Friday'){
      message.innerHTML = "Your Akan name is Afua"
    }
    else if(day == 'Saturday'){
      message.innerHTML = "Your Akan name is Ama"
    }}
  else {
    if(day == 'Sunday'){
      message.innerHTML = "Your Akan name is Kwasi"
    } 
    else if(day == 'Monday'){
      message.innerHTML = "Your Akan name is Kwadwo"
    }
    else if(day == 'Tuesday'){
      message.innerHTML = "Your Akan name is Kwabena"
    }
    else if(day == 'Wednesday'){
      message.innerHTML = "Your Akan name is Kwaku"
    }
    else if(day == 'Thursday'){
      message.innerHTML = "Your Akan name is Yaw"
    }
    else if(day == 'Friday'){
      message.innerHTML = "Your Akan name is Kofi"
    }
    else if(day == 'Saturday'){
      message.innerHTML = "Your Akan name is Kwame"
    }
  } 
  console.log(document.querySelectorAll('.none'))
  document.querySelectorAll('.none').style.display='block'
  

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