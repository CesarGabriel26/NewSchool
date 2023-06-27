let containerCards = document.getElementById('containerCards')

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

function CarregarClasses() {
    containerCards.innerHTML = ""
    Dados.Materias.forEach(Materia => {
        containerCards.innerHTML += Card(Materia)
    })
}

CarregarClasses()
