let containerCards = document.getElementById('containerCards')
let LeftNav = document.getElementById('LeftNav')

const Card = (Materia) => `
    <div class="Card">
        <div class="Image" style="background-image:url('img/Cards/${Materia}.png');"></div>
        <h2>${Materia}</h2>
    </div>
`


var Dados = {
    Materias: [
        "Matematica",
        "Ciência",
        "Geografia"
    ],
    Classes: [
        "Pré escola",
        "1º Ano",
        "2º Ano",
        "3º Ano",
        "4º Ano",
        "5º Ano",
        "6º Ano",
        "7º Ano",
        "8º Ano",
        "9º Ano",
        "1º Em",
        "2º Em",
        "3º Em",
    ]
}

function GetMaterias(Classe) {
    var html = `<h1>Matematica</h1>`

    Dados.Materias.forEach(Materia =>{
        
    })

    return html
}


function CarregarClasses() {
    

    var html = (Classe) =>`
        <div class="OpcContainer">
        
            <li onclick="LoadPage('${Classe}');ShowMaterias('${Classe}')" data-Page="${Classe}" id="Opc">
                <h1>
                    <ion-icon name="school-outline"></ion-icon>
                    ${Classe}
                </h1>
            </li>
            <div id="Materias">
                    ${GetMaterias()}
            </div>
        
        </div>
    `

    Dados.Classes.forEach(Classe => {
        LeftNav.innerHTML += html(Classe)
    })
}

CarregarClasses()

function LoadPage(Page) {
    let Opcs = document.querySelectorAll('#Opc')

    Opcs.forEach(Opc => {
        if (Opc.getAttribute('data-Page') == Page) {
            Opc.classList.add('Select')
        }else{
            Opc.classList.remove('Select')
        }
    })
}

function ShowMaterias(Classe){
    let Opcs = document.querySelectorAll('#Opc')

    Opcs.forEach(Opc => {
        if (Opc.getAttribute('data-Page') == Classe) {
            if (Opc.parentElement.classList.contains('Aberto')) {
                Opc.parentElement.classList.remove('Aberto')
            }else {
                Opc.parentElement.classList.add('Aberto')
            }
        }else{
            Opc.parentElement.classList.remove('Aberto')
        }
    })
}