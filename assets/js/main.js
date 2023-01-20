

function sorteiaNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function sorteiaCiv() {
    document.addEventListener('click', function (e) {
        const el = e.target;

        let num = sorteiaNumero(1, 37);

        if (el.classList.contains('civ-sorteada')) {
            if (num === 1) {
                el.setAttribute('src', './assets/img/civs/astecas.png')
            }
            if (num === 2) {
                el.setAttribute('src', './assets/img/civs/berberes.png')
            }
            if (num === 3) {
                el.setAttribute('src', './assets/img/civs/birmaneses.png')
            }
            if (num === 4) {
                el.setAttribute('src', './assets/img/civs/bizantinos.png')
            }
            if (num === 5) {
                el.setAttribute('src', './assets/img/civs/bretoes.png')
            }
            if (num === 6) {
                el.setAttribute('src', './assets/img/civs/bulgaros.png')
            }
            if (num === 7) {
                el.setAttribute('src', './assets/img/civs/celtas.png')
            }
            if (num === 8) {
                el.setAttribute('src', './assets/img/civs/chineses.png')
            }
            if (num === 9) {
                el.setAttribute('src', './assets/img/civs/coreanos.png')
            }
            if (num === 10) {
                el.setAttribute('src', './assets/img/civs/cumanos.png')
            }
            if (num === 11) {
                el.setAttribute('src', './assets/img/civs/eslavos.png')
            }
            if (num === 12) {
                el.setAttribute('src', './assets/img/civs/espanhois.png')
            }
            if (num === 13) {
                el.setAttribute('src', './assets/img/civs/etiopes.png')
            }
            if (num === 14) {
                el.setAttribute('src', './assets/img/civs/francos.png')
            }
            if (num === 15) {
                el.setAttribute('src', './assets/img/civs/godos.png')
            }
            if (num === 16) {
                el.setAttribute('src', './assets/img/civs/hindustanis.png')
            }
            if (num === 17) {
                el.setAttribute('src', './assets/img/civs/hunos.png')
            }
            if (num === 18) {
                el.setAttribute('src', './assets/img/civs/incas.png')
            }
            if (num === 19) {
                el.setAttribute('src', './assets/img/civs/italianos.png')
            }
            if (num === 20) {
                el.setAttribute('src', './assets/img/civs/japoneses.png')
            }
            if (num === 21) {
                el.setAttribute('src', './assets/img/civs/khmers.png')
            }
            if (num === 22) {
                el.setAttribute('src', './assets/img/civs/lituanos.png')
            }
            if (num === 23) {
                el.setAttribute('src', './assets/img/civs/magiares.png')
            }
            if (num === 24) {
                el.setAttribute('src', './assets/img/civs/maias.png')
            }
            if (num === 25) {
                el.setAttribute('src', './assets/img/civs/malaios.png')
            }
            if (num === 26) {
                el.setAttribute('src', './assets/img/civs/malineses.png')
            }
            if (num === 27) {
                el.setAttribute('src', './assets/img/civs/mongois.png')
            }
            if (num === 28) {
                el.setAttribute('src', './assets/img/civs/persas.png')
            }
            if (num === 29) {
                el.setAttribute('src', './assets/img/civs/portugueses.png')
            }
            if (num === 30) {
                el.setAttribute('src', './assets/img/civs/sarracenos.png')
            }
            if (num === 31) {
                el.setAttribute('src', './assets/img/civs/tartaros.png')
            }
            if (num === 32) {
                el.setAttribute('src', './assets/img/civs/teutoes.png')
            }
            if (num === 33) {
                el.setAttribute('src', './assets/img/civs/turcos.png')
            }
            if (num === 34) {
                el.setAttribute('src', './assets/img/civs/vietinamitas.png')
            }
            if (num === 35) {
                el.setAttribute('src', './assets/img/civs/vinkings.png')
            }
            if (num === 36) {
                el.setAttribute('src', './assets/img/civs/sorte.png')
            }
        }

    })
}


function popUp() {
    document.addEventListener('click', function (e) {
        const popUp = document.querySelector('.pop-up')
        const fundoBlur = document.querySelector('.div-blur')
        let el = e.target;
        if (el.classList.contains('add-player')) {
            popUp.style.display = 'flex';
            fundoBlur.style.display = 'flex';

        }
        if (el.classList.contains('btn-fechar')) {
            popUp.style.display = 'none';
            fundoBlur.style.display = 'none';

        }
    })
    document.addEventListener('keydown', function (e) {

    })
}


function criarJogador() {
    document.addEventListener('click', function (e) {
        const popUp = document.querySelector('.pop-up')
        const fundoBlur = document.querySelector('.div-blur')
        const nav = document.querySelector('.nav')
        const divInfo = document.querySelector('.div-info')
        let el = e.target;
        if (document.querySelector('.nome-jogador').value !== '') {

            if (el.classList.contains('btn-criar')) {
                let nomeDigitado = document.querySelector('.nome-jogador').value

                let divPlayer = document.createElement('div')
                divPlayer.setAttribute('class', 'div-player')

                let fotoPlayer = document.createElement('img')
                fotoPlayer.setAttribute('class', 'foto')

                let nomeJogador = document.createElement('strong')
                nomeJogador.innerText = nomeDigitado;
                nomeJogador.setAttribute('class', 'nomes')

                let civJogador = document.createElement('img')
                civJogador.setAttribute('class', 'civ-sorteada')
                civJogador.setAttribute('src', './assets/img/civs/random.png')


                if (nomeDigitado === 'Nheco') {
                    fotoPlayer.setAttribute('src', './assets/img/avatares/nheco.png')
                }
                else if (nomeDigitado === 'Vitin' || nomeDigitado === 'Vito') {
                    fotoPlayer.setAttribute('src', './assets/img/avatares/vitin.png')
                }
                else if (nomeDigitado === 'Pedo' || nomeDigitado === 'Pedin') {
                    fotoPlayer.setAttribute('src', './assets/img/avatares/pedin.png')
                }
                else if (nomeDigitado === 'Takaki') {
                    fotoPlayer.setAttribute('src', './assets/img/avatares/takaki.png')
                }
                else if (nomeDigitado === 'Ranigod') {
                    fotoPlayer.setAttribute('src', './assets/img/avatares/ranigod.png')
                }
                else {
                    fotoPlayer.setAttribute('src', './assets/img/village.png')
                }

                nav.append(divPlayer)
                divPlayer.appendChild(fotoPlayer)
                divPlayer.appendChild(nomeJogador)
                divPlayer.appendChild(civJogador)

                divInfo.style.display = 'none';
                popUp.style.display = 'none';
                fundoBlur.style.display = 'none';
            }
        }
    })
}

function deletaJogador() {
    document.addEventListener('click', function (e) {
        let el = e.target;
        if (el.classList.contains('foto')) {
            el.parentNode.remove()
        }
    })
}
deletaJogador()
criarJogador()
popUp()
sorteiaCiv()