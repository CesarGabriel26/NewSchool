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
        ["Matematica", ["All"] ],
        ["Ciência", ["All"] ],
        ["Geografia", ["All"] ]
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
    var html = ""


    Dados.Materias.forEach(Materia => {
        var Array = Materia[1]

        if (Array[0] == "All") {
            html += `<a href="#${Materia[0]}"><h1>${Materia[0]}</h1></a>`
        }else {
            if (Classe == Array[0]) {
                html += `<a href="#${Materia[0]}"><h1>${Materia[0]}</h1></a>`
            }
        }
    })

    return html
}


function CarregarClasses() {


    var html = (Classe) => `
        <div onmouseleave="HideMaterias()" onmouseenter="LoadPage('${Classe}');ShowMaterias('${Classe}')" class="OpcContainer">
        
            <li  data-Page="${Classe}" id="Opc">
                <h1>
                    <ion-icon name="school-outline"></ion-icon>
                    ${Classe}
                </h1>
            </li>
            <div id="Materias">
                    ${GetMaterias(Classe)}
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
        } else {
            Opc.classList.remove('Select')
            Opc.parentElement.classList.remove('Aberto')
        }
    })
}

function ShowMaterias(Classe) {
    let Opcs = document.querySelectorAll('#Opc')

    Opcs.forEach(Opc => {
        if (Opc.getAttribute('data-Page') == Classe) {
            Opc.parentElement.classList.add('Aberto')
        } else {
            Opc.parentElement.classList.remove('Aberto')
        }
    })
}

function HideMaterias() {
    let Opcs = document.querySelectorAll('#Opc')

    Opcs.forEach(Opc => {
        Opc.parentElement.classList.remove('Aberto')
    })
}