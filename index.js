function clock() {
  var date = new Date();
  var time = date.getTime();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  if (hour > 12) {
    var newHour = hour%12;
    if (minute < 10) {
      $(".clock h2").text(newHour + ":" + minute + ":" + second + " PM");  
    }
    if (second < 10) {
      $(".clock h2").text(newHour + ":" + minute + ":" + second + " PM");    
    }
    if (minute < 10 && second < 10) {
      $(".clock h2").text(newHour + ":" + minute + ":" + second + " PM");  
    }
    $(".clock h2").text(newHour + ":" + minute + ":" + second + " PM")
  } else {
    if (minute < 10) {
      $(".clock h2").text(hour + ":" + minute + ":" + second + " AM");    
    } 
    if (second < 10) {
      $(".clock h2").text(hour + ":" + minute + ":" + second + " AM");
    } 
    if (minute < 10 && second < 10) {
      $(".clock h2").text(hour + ":" + minute + ":" + second + " AM");
    }
    $(".clock h2").text(hour + ":" + minute + ":" + second + " AM");
  }


  var timing = setTimeout(() => {
    clock();  
  }, 500);
}

clock();




