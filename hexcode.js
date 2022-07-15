
const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateHexCode = ( ) => {
    const randomHexCode = Math.random().toString(16).substring(2,8);

   document.body.style.backgroundColor = "#" + randomHexCode;
   hex.innerHTML = "#" + randomHexCode;
};

btn.addEventListener("click", generateHexCode);

generateHexCode();