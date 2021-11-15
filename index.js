let day = document.querySelector("#day").value
let month = document.querySelector("#month").value
let year = document.querySelector("#year").value

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
  if (document.querySelector("#day").value == "") {
    validateDay();
  }
  if(gender == null){
    const errMsg = document.getElementById('errG')

   errMsg.innerHTML = "";
  try {
    if(gender == null) throw "choose gender!";
    
  }
  catch(err) {
    errMsg.innerHTML = "Please " + err;
  }
  return
  }
 
  if(gender == 'Female'){
    if(day == 'Sunday'){
      message.innerHTML = "Akosua"
    } 
    else if(day == 'Monday'){
      message.innerHTML = "Adwoa"
    }
    else if(day == 'Tuesday'){
      message.innerHTML = "Abenaa"
    }
    else if(day == 'Wednesday'){
      message.innerHTML = "Akua"
    }
    else if(day == 'Thursday'){
      message.innerHTML = "Yaa"
    }
    else if(day == 'Friday'){
      message.innerHTML = "Afua"
    }
    else if(day == 'Saturday'){
      message.innerHTML = "Ama"
    }}
  else {
    if(day == 'Sunday'){
      message.innerHTML = "Kwasi"
    } 
    else if(day == 'Monday'){
      message.innerHTML = " Kwadwo"
    }
    else if(day == 'Tuesday'){
      message.innerHTML = "Kwabena"
    }
    else if(day == 'Wednesday'){
      message.innerHTML = "Kwaku"
    }
    else if(day == 'Thursday'){
      message.innerHTML = "Yaw"
    }
    else if(day == 'Friday'){
      message.innerHTML = "Kofi"
    }
    else if(day == 'Saturday'){
      message.innerHTML = "Kwame"
    }
  } 
  console.log(document.querySelectorAll('.none'))
  const ps = document.querySelectorAll('.none')

  for (var x = 0; x < ps.length; x++){
    ps[x].style.display = 'block'
  }
}
function clearForm(){
    document.querySelector("#day").value = "";
    document.querySelector("#month").value = "";
    document.querySelector("#year").value = "";
    document.querySelectorAll('input[name="gender"]').checked = false;

  const ps = document.querySelectorAll(".none");

  for (var x = 0; x < ps.length; x++) {
    ps[x].style.display = "none";
  const radios = document.getElementsByName("gender");
  for (var i = 0; i < radios.length; i++) radios[i].checked = false;
  }
}
document.getElementById('clearform').addEventListener('click',clearForm)

