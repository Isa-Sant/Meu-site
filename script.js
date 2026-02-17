// DARK MODE com salvar

function darkMode() {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("tema","dark");
}else{
localStorage.setItem("tema","light");
}

}

if(localStorage.getItem("tema")==="dark"){
document.body.classList.add("dark");
}


// destacar página ativa

const links = document.querySelectorAll("nav a");

links.forEach(link => {

if(link.href === window.location.href){
link.style.borderBottom="2px solid white";
}

});


// efeito clique botão

const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => {

btn.addEventListener("click", () => {

btn.style.transform="scale(0.95)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},150);

});

});

// MENU MOBILE

function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}


