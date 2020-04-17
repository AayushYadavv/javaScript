const input= document.querySelector("#secretMessageIn");
const buttonCreate  = document.querySelector(".submit");
const  secretMessageInput = document.querySelector("#encrypted-message");
const messageClass = document.querySelector(".message")
const linkClass = document.querySelector(".link-generated")
const SecretMessageClass= document.querySelector(".SecretMessage");
const secretMessage = document.querySelector("#secret");

const locationHash = window.location.hash;
if(locationHash!=""){

    messageClass.classList.add("hide");
    linkClass.classList.add("hide");
    SecretMessageClass.classList.remove("hide");
    secretMessage.innerText= atob(locationHash.replace("#",""));
}




buttonCreate.addEventListener("click",()=>{

 const secret=btoa(input.value);
 messageClass.classList.add("hide");
 linkClass.classList.remove("hide");
 secretMessageInput.value = `${window.location}`+`#${secret}`;
 secretMessageInput.select();




})