var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabName) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-links");
  document.getElementById(tabName).classList.add("active-tab");
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

function openmenu() {
  sidemenu.style.right = "0";
}

// Script for contact form data base

const scriptURL = "https://script.google.com/macros/s/AKfycbz31I8DIgk5gq4ds4IJI-7nrdFIgK-9MYteyCrBxBYQGvdpzUTWkBR6y14kn__sMlb5/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message Sent Successfully !!"
      setTimeout(function(){
        msg.innerHTML = "";
      },3000)
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// GOOGLE SHEET TO VIEW DATA FROM THE USER 
/*
  https://docs.google.com/spreadsheets/d/1iD9-2jC7EvdCe1vESxo0-RE92jzhMf-uiDXXsg6qVuU/edit#gid=0
*/