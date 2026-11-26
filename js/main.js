"use strict";
const ticketForm=document.querySelector("#ticket-form");
if(ticketForm){ticketForm.addEventListener("submit",event=>{event.preventDefault();const message=document.querySelector("#form-message");if(message){message.textContent="Vielen Dank! Dies ist eine Demo – es wurde keine Buchung versendet und keine Daten gespeichert.";}ticketForm.reset();});}
