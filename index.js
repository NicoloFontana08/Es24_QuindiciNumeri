window.addEventListener("load", function () {
    creaMatrice()
    caricaMatrice()
})

function creaMatrice() {
    const wrapper = document.getElementById("wrapper")
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = document.createElement("div")
            div.addEventListener("click", divClick)
            div.id = `div${i}-${j}}`
            wrapper.appendChild(div)
        }

    }
}


function divClick() {
    const i = parseInt(this.id.split('-')[1])
    const j = parseInt(this.id.split('-')[2])
    if (i - 1 >= 0) {
        const sopra = document.getElementById(`div${i - 1}-${j}}`)
        if (sopra.textContent == "") {
            scambiaDiv(this, vuota)
            return
        }
    }

    if (j + 1 < 4) {
        const destra = document.getElementById(`div${i}-${j + 1}}`)
        if (destra.textContent == "") {
            scambiaDiv(this, vuota)
            return
        }
    }

    if (i + 1 >= 0) {
        const sotto = document.getElementById(`div${i + 1}-${j}}`)
        if (sopra.textContent == "") {
            scambiaDiv(this, sotto)
            return
        }
    }

    if (j - 1 < 4) {
        const destra = document.getElementById(`div${i}-${j - 1}}`)
        if (destra.textContent == "") {
            scambiaDiv(this, vuota)
            return
        }
    }

}

function scambiaDiv(piena, vuota) {
    vuota.textContent = piena.textContent
    vuota.style.backgroundColor = "blue"

    piena.textContent = ""
    piena.backgroundColor = null
}
function caricaMatrice() {
    for (let cont = 1; cont <= 15; cont++) {
        let divRnd
        do {
            const i = Math.floor(Math.random() * 4)
            const j = Math.floor(Math.random() * 4)
            divRnd = document.getElementById(`div${i}-${j}}`)
        } while (divRnd.textContent != "")
        divRnd.style.backgroundColor = "blue"
        divRnd.textContent = cont

    }

}

