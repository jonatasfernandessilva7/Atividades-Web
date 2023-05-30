/*
console.log(mensagem); // declara um valor undefined
var mensagem = "declaração";
var mensagem = "redeclaração";
console.log(mensagem); // declara "redeclaração"
*/

/*
function exibirMensagem() {
    var msmForaDoIf = 'msg1';
    if (true) {
        var msmForaDoIf = "msg2";
    }
    console.log(msmForaDoIf); // mostra "msg2"
}


exibirMensagem();

//null: existe mas foi atribuído como vazio, sem valor
//undefined: var não declarada mas sem valor

let testeString = "IE6" > 0; 
console.log(testeString); //retorna um boolean false

//vetores
/*
let a = ["Stef", "Jason"]; //Stef, Jason
a.push("Brian"); //Stef, Jason, Brian
a.unshift("Kelly"); //Kelly, Stef, Jason, Brian
a.pop(); //Kelly, Stef, Jason
a.shift(); //Stef, Jason
a.sort(); // Jason, Stef
console.log(a);
*/

/*
let s = "the quick brown fox" ;
let a = s.split(" "); // ["the", "quick", "brown", "fox"]
a.reverse(); // ["fox", "brown", "quick", "the"]
s = a.join("!"); // "fox!brown!quick!the"
console.log(a);
console.log(s);

//for in e for of

//blocos try, catch e finally; tratamento de excessão

//objetos e funções (próxima aula)

function exemplo(a, b) {
    return a * b;
}

exemplo.length // 2
exemplo.constructor // Function()

const square = (number) => {
     return number * number 
}

let x = square(4) // x -> 16

console.log(x);

///////////////////////////////////////////////////////////////////////////////////////////

function soma(x, y = 10) {
    return x + y;
}

console.log(soma(5)); //15

//////////////////////////////////////////////////////////////////////////////////////////

(function () {
    let x = "Oi e Adeus"; // So e executado uma vez
})();

//////////////////////////////////////////////////////////////////////////////////////////

const a = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium'
];
const a2 = a.map(function (s) { return s.length; });
console.log(a2); // logs [8, 6, 7, 9]

///////////////////////////////////////////////////////////////////////////////////////////
/*
const a = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium'
];
const a3 = a.map(s => s.length);
console.log(a3); // logs [8, 6, 7, 9]

let soma = (a, b) => 1 + 2;

console.log(soma);
*/

function pokemon(nome, especie, nivel=1)  
	this.nome = nome,
	this.especie = especie,
	this.nivel = nivel,
	this.falar = () => '${this.nome} ${this.nome}';

let pikachu = new pokemon('pikachu', 'pikachu');
let charmander = new pokemon('charmander', 'charmander', 10);

