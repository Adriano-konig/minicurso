const imagem = document.querySelector('#imagemA');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');
const imagemB = document.querySelector('#imagemB');
const nomeDoPersonagemB = document.querySelector('#nomeB');
const especieB = document.querySelector('#especieB');
const condicaoB = document.querySelector('#statusB');
const imagemC = document.querySelector('#imagemC');
const nomeDoPersonagemC = document.querySelector('#nomeC');
const especieC = document.querySelector('#especieC');
const condicaoC = document.querySelector('#statusC');


traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

traduzirCondicaoB = (dataB) => {
    if(dataB.status == 'unknown'){
        return 'Não sabemos';
    }else if(dataB.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

traduzirCondicaoC = (dataC) => {
    if(dataC.status == 'unknown'){
        return 'Não sabemos';
    }else if(dataC.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    
    let numeroAleatorioB = gerarValorAletorio();
        return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioB}`, {
            method:'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
    }).then((response) => response.json()).then((dataB) => {
        imagemB.src = dataB.image;
        imagemB.alt = dataB.name;
        nomeDoPersonagemB.innerHTML = dataB.name;
        especieB.innerHTML = dataB.species;
        condicaoB.innerHTML = traduzirCondicaoB(dataB);
    
    let numeroAleatorioC = gerarValorAletorio();
        return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioC}`, {
            method:'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
    }).then((response) => response.json()).then((dataC) => {    
        imagemC.src = dataC.image;
        imagemC.alt = dataC.name;
        nomeDoPersonagemC.innerHTML = dataC.name;
        especieC.innerHTML = dataC.species;
        condicaoC.innerHTML = traduzirCondicaoC(dataC);   
    });
});
    });
}

botao.onclick = pegarPersonagem;
