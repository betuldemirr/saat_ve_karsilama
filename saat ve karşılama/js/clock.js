let myname = document.querySelector("#myName");
let ask = prompt("İsminiz : ");

myname.innerHTML = ask.length >= 0 ? ask : "";

function showTime() {
  var date = new Date();

  var h = date.getHours(); //0-23
  var m = date.getMinutes(); //0-59
  var s = date.getSeconds(); //0-59

  var session = "AM";

  h < 10 ? (h = "0" + h) : h; //saat, 10 dan küçükse başa 0 koy
  m < 10 ? (m = "0" + m) : m; //daika, 10 dan küçükse başa 0 koy
  s < 10 ? (s = "0" + s) : s; //saniye, 10 dan küçükse başa 0 koy

  var time = h + ":" + m + ":" + s + " " + session; //saati tanımla

  document.querySelector("#myClock").textContent = time; //saati yazdır

  setTimeout(showTime, 1000); //1 saniye sonrası ile fonk çalışmasını sağlar
}
showTime();

function day() {
  var date = new Date();
  var d = date.getDay(); //gunler

  switch (d) {
    case 0:
      d = "Pazar";
      break;

    case 1:
      d = "Pazartesi";
      break;

    case 2:
      d = "Salı";
      break;

    case 3:
      d = "Çarşamba";
      break;

    case 4:
      d = "Perşembe";
      break;

    case 5:
      d = "Cuma";
      break;

    case 6:
      d = "cumartesi";
      break;
  }

  document.querySelector("#day").innerText = d;

  setTimeout(day, 1000);
}
day();
