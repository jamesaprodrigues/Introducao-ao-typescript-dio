let buttonTeste = document.getElementById('button');

function somarImplicitos(parametro1: any, parametro2: any) : void{
    return parametro1 + parametro2
}

buttonTeste?.addEventListener('click', () => {
    console.log('funcionou')
})