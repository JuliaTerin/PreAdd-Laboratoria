let name = prompt('Qual seu nome?');
document.getElementById("nome").innerHTML = "Olá, " + name;

let inicio = prompt('Bem-Vindo ao Quiz. Você quer participar? Se SIM, digite 1. Se NÃO, digite 2');

let  perguntaUm = prompt("Qual a sigla do estado do Pará?")
let  perguntaDois = prompt("Quantos Estados têm no Brasil?")
let  perguntaTres = prompt("Qual o maior país da América Latina?")

     if (inicio == 1){
        
    } else {
        alert("Adeus!")
    }
    
let respostaUm = "PA";
let respostaDois = 26;
let respostaTres = "Brasil";

   if (perguntaUm == respostaUm){
    document.getElementById("corretaUm").innerHTML = "Pergunta 1";
} else{
    document.getElementById("erradaUm").innerHTML = "Pergunta 1";
}
   if (perguntaDois == respostaDois){
    document.getElementById("corretaDois").innerHTML = "Pergunta 2";
}else{
    document.getElementById("erradaDois").innerHTML = "Pergunta 2";
}
    if (perguntaTres == respostaTres){
        document.getElementById("corretaTres").innerHTML = "Pergunta 3";
    }else{
        document.getElementById("erradaTres").innerHTML = "Pergunta 3";
     }

