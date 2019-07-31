//4) Elaborar um programa em Javascript que lê 2 valores a e b e os escreve com a mensagem: ?São múltiplos? ou ?Não são múltiplos?.
 var a = parseInt(prompt("Insira o primeiro valor"));
 var b = parseInt(prompt("Insira o segundo valor"));

 if (a > b) {
   if (a % b === 0) {
     document.body.append("São multiplos");
   } else{
     document.body.append("Não são multiplos");
   }
 }

 if (a < b) {
   if (b % a !==0) {
     document.body.append("Não são multiplos");
   } else{
     document.body.append("São Multiplos")
   }
 }
