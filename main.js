//assitant settings//

const btn = document.getElementById("microPhn");
const content = document.getElementById("content");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition =  new SpeechRecognition();
btn.addEventListener("click", ()=> {
  
  recognition.start();
  btn.style.color = "lightpink";

  
  
});



recognition.onstart = function(){
  
  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event){
  
  const current = event.resultIndex;
  
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  
  btn.style.color="lightpink";
  
  if(content.textContent.toLocaleLowerCase().includes("hi")||content.textContent.toLocaleLowerCase().includes("hello")){
    
    read("Hello! How are you?");
  }
  else if(content.textContent.toLocaleLowerCase().includes("google")){
    
    read("opening google!");
    window.open("https://google.com");
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("facebook")) {
  
    read("opening facebook!");
    window.open("https://facebook.com");
  }
  
  
  else if (content.textContent.toLocaleLowerCase().includes("youtube")) {
  
    read("opening youtube!");
    window.open("https://youtube.com");
  }
  else if (content.textContent.toLocaleLowerCase().includes("instagram")) {
  
    read("opening enstagram!");
    window.open("https://instagram.com");
  }
  
  if (content.textContent.toLocaleLowerCase().includes("alexa")) {
  
    read("Yeah sir checking my system............ OK... I am now online sir. Now you can give me commands. For primary instruction say help");
  }
  
  
  if (content.textContent.toLocaleLowerCase().includes("whatsapp")) {
  
    read("opening whatsapp!");
    window.open("https://web.whatsapp.com");
  }
  
  if (content.textContent.toLocaleLowerCase().includes("wikipedia")) {
  
    read("opening wikipedia!");
    window.open("https://wikipedia.org");
  }
  if (content.textContent.toLocaleLowerCase().includes("here")) {
  
    read("Yes boss! I'm ready and online now");
    
  }
  
  if (content.textContent.toLocaleLowerCase().includes("time")) {
  
    var name = new Date();
    
    var hours = name.getHours();
    var min = name.getMinutes();
    var sec = name.getSeconds();
    
    
    read("It's" + hours + " " + min + " sir");
  
  }
  
  
  if (content.textContent.toLocaleLowerCase().includes("date")) {
  
    var name = new Date();
  
    var date = name.getDate();
    var mon = name.getMonth();
    var month;
    
    if(mon==0){
      
      month = "january";
      
    }
    if (mon == 1) {
    
      month = "february";
    
    }
    
    if (mon == 2) {
    
      month = "march";
    
    }
    
    if (mon == 3) {
    
      month = "april";
    
    }
    
    if (mon == 4) {
    
      month = "may";
    
    }
    
    if (mon == 5) {
    
      month = "jun";
    
    }
    if (mon == 6) {
    
      month = "july";
    
    }
    if (mon == 7) {
    
      month = "august";
    
    }
    if (mon == 8) {
    
      month = "september";
    
    }
    if (mon == 9) {
    
      month = "october";
    
    }
    
    if (mon == 10) {
    
      month = "november";
    
    }
    
    if (mon == 11) {
    
      month = "december";
    
    }
    var year = name.getFullYear();
  
  
    read("sir today is"+date+" "+month+" "+year);
  
  }
  if (content.textContent.toLocaleLowerCase().includes("good")) {
  
    read("Thanks sir! All credit goes to my creator.");
  
  }
  
  if (content.textContent.toLocaleLowerCase().includes("ok")) {
  
    read("yeah! What's next sir?");
  
  }
  
  if (content.textContent.toLocaleLowerCase().includes("help")) {
  
    read("This web application is specially design for voice recognition and voice search. You can give me commands and I will show you result according to it. You can open google, youtube, whatsapp,enstagram,wikipedia,quora,spotify and so on. You can also check the date, time,weather by give me commands. You can also search directly to google, youtube and wikipedia. For more information contact my creator. He can easily explaine you why he built me.Have a good day!Thank you from my boss!");
  
  }
  
  
  if (content.textContent.toLocaleLowerCase().includes("fine")) {
  
    read("Oh! That's great. How can I help you Sir?");
  
  }
  
  if (content.textContent.toLocaleLowerCase() ===("open")) {
  
    read("what do you want to open sir?");
  
  }
  
  if (content.textContent.toLocaleLowerCase().includes("listen")&&content.textContent.toLocaleLowerCase().includes("a")&& content.textContent.toLocaleLowerCase().includes("song") ) {
  
    read("OK sir! I'm opening spotify!");
    window.open("https://spotify.com");
  
  }
}





function read(message){
  
  
  const speech = new SpeechSynthesisUtterance();
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.text = message;
  
  
  
  window.speechSynthesis.speak(speech);
  
  
}




//initializing google search


function googleSearch(){
var googleBtn = document.getElementById("gn");
var googleContent = document.getElementById("gs");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
googleBtn.addEventListener("click", () => {

  recognition.start();
  btn.style.color = "lightpink";



});



recognition.onstart = function() {

  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    googleContent.textContent = transcript;
    
    read("showing your results");
    var a = "https://google.com/search";
    window.open(a + "?q=" + googleContent.textContent + "&oq=" + googleContent.textContent + "&aqs=chrome");
}


}

//initializing wiki search

function wikiSearch(){
var wikiBtn = document.getElementById("wn");
var wikiContent = document.getElementById("ws");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
wikiBtn.addEventListener("click", () => {

  recognition.start();
  btn.style.color = "lightpink";



});



recognition.onstart = function() {

  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    wikiContent.textContent = transcript;
    
    read("showing your results");
    var a = "https://en.m.wikipedia.org/wiki/";
    window.open(a +wikiContent.textContent);
}


}

//inititializing youtube



function utube(){
var utubeBtn = document.getElementById("yn");
var utubeContent = document.getElementById("ys");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
utubeBtn.addEventListener("click", () => {

  recognition.start();
  btn.style.color = "lightpink";


});



recognition.onstart = function() {

  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    utubeContent.textContent = transcript;
    
    read("showing your results");
    var a = "https://m.youtube.com/results?sp=mAEA&search_query=";
    window.open(a + utubeContent.textContent);
}


}
//xx assitant settingsxx//


//******mode change*********//

function v(){
  
  
  alert("Not available now!");
  
}

//*-******mode change *****--**//


function about(){
  
  alert("Showing a dummy text!");
}

function calc(){
  
  alert("Not yet created!");
}

function place(){

const input = document.getElementById("search").value;
document.getElementById("late").innerHTML = input;
}

