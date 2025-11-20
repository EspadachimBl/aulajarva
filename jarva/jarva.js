function calcularIMC() {
let altura = document.getElementById('altura').value;
let peso = document.getElementById('peso').value;
let IMC = null;
let mensagem = "";

IMC = peso / (altura*altura);

if(IMC< 18.5){
    mensagem = "Abaixo do peso normal";
}else if(IMC>= 18.5 && IMC <= 24.9){
    mensagem = "Peso Normal";
}else if(IMC >= 25 && IMC <= 29.9){
   mensagem = "Excesso de peso";
}else if(IMC >= 30 && IMC <= 34.9){
    mensagem = "Obesidade classe 1";
}else if(IMC >= 35 && IMC <= 39.9){
     mensagem = "Obesidade classe 2";
}else if(IMC >= 40){
    mensagem = "Obesidade classe 3";
}

 document.getElementById("saida").innerText = mensagem + " (IMC: " + imc.toFixed(2) + ")";

}