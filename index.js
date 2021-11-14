const day = document.querySelector("#day").innerHTML
const month = document.querySelector("#month").innerHTML
const year = document.querySelector("#year").innerHTML

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