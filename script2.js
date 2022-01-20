function banco(){
    

var personas=["Sofía","David","Juan"];


console.log(personas);


let nuevosParticipantes = personas.push('Sara','Agustin');


console.log(personas);

let nuevosParticipantes2 = personas.shift();

console.log(personas);

personas.splice(personas.length/3,0,'Renata');

console.log(personas);

personas.push('Elena');

console.log(personas);

}

banco();





let i = 10;
while (i) {
  console.log(i);
  i-=.5;
}



var numero = 0
while (numero<100){
    numero++;
    if (numero%2){

        console.log(numero);


    }

}


var numero1 = 10;
var factorial = 1;

while (numero1 > 1) {
    factorial = factorial * numero1;
    numero--;
}

console.log(factorial);



