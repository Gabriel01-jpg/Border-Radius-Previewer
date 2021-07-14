// MUDAR O COMPORTAMENTO DOS SUBMITS PARA NÃO ATUALIZAR A PÁGINA

const BTNS = document.querySelectorAll('form');



function changeDefault(e){
    e.preventDefault();
}

for(i of BTNS){
    i.addEventListener('submit', changeDefault );
}

// RECEBER O INPUT BORDER TOP-LEFT
// RECEBER O INPUT BORDER TOP RIGHT
// RECEBER O INPUT BORDER BOTTOM RIGHT
// RECEBER O INPUT BORDER BOTTOM LEFT

const bTopL = document.querySelector('#bTopL')
const bTopR = document.querySelector('#bTopR')
const bBottomL = document.querySelector('#bBottomL')
const bBottomR = document.querySelector('#bBottomR')
const copyInput = document.querySelector('#copyInput')

// APLICAR OS VALORES NA DIV RADIUS PARA DEMOSTRAR COMO FICOU
// JOGAR OS VALORES DENTRO DO INPUT COPY 


function applyRadius(){

    const radius = document.querySelector('.radius')
    const bTopLValue = bTopL.value !== '' ? bTopL.value : '0'
    const bTopRValue = bTopR.value !== '' ? bTopR.value : '0'
    const bBottomLValue = bBottomL.value !== '' ? bBottomL.value : '0'
    const bBottomRValue = bBottomR.value !== '' ? bBottomR.value : '0'

    radius.style.borderTopLeftRadius = `${bTopLValue}px`;
    radius.style.borderTopRightRadius = `${bTopRValue}px`;
    radius.style.borderBottomLeftRadius = `${bBottomLValue}px`;
    radius.style.borderBottomRightRadius =  `${bBottomRValue}px`;
    copyInput.value = `border-radius: ${bTopLValue}px ${bTopRValue}px ${bBottomRValue}px ${bBottomLValue}px`


}

// FAZER FUNCAO PARA JOGAR O VALOR DENTRO DO COPY

function copyReturn(){
    let copyInput = document.querySelector('#copyInput')

    copyInput.select();
    copyInput.setSelectionRange(0, 99999);

    document.execCommand('copy');
    alert("Copied the text: " + copyInput.value);
}

