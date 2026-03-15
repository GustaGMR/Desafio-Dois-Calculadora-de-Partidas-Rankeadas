let nome = "";
let vitorias = 0;
let derrotas = 0

function saldoDeVitorias (vitorias, derrotas){
    return vitorias - derrotas
}

function nivel(vitorias) {
    if (vitorias <= 10){
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20 ){
        return "Bronze";
    }else if (vitorias >= 21 && vitorias <= 50 ){
        return "Prata";
    }else if (vitorias >= 51 && vitorias <= 80 ){
        return "Ouro";
    }else if (vitorias >= 81 && vitorias <= 90 ){
        return "Diamante";
    }else if (vitorias >= 91 && vitorias <= 100 ){
        return "Lendário";
    }else{
        return "Imortal";
    }
}


vitorias = 50;
derrotas = 45;

let saldoVitorias = saldoDeVitorias(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel(saldoVitorias)}`);

vitorias = 50;
derrotas = 30;

saldoVitorias = saldoDeVitorias(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel(saldoVitorias)}`);

vitorias = 60;
derrotas = 30;

saldoVitorias = saldoDeVitorias(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel(saldoVitorias)}`);

vitorias = 88;
derrotas = 30;

saldoVitorias = saldoDeVitorias(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel(saldoVitorias)}`);

vitorias = 100;
derrotas = 15;

saldoVitorias = saldoDeVitorias(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel(saldoVitorias)}`);

vitorias = 96;
derrotas = 4;

saldoVitorias = saldoDeVitorias(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel(saldoVitorias)}`);

vitorias = 300;
derrotas = 10;

saldoVitorias = saldoDeVitorias(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel(saldoVitorias)}`);