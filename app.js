const containter = document.getElementById("container")
const bttnSize = document.getElementById("")

//function that makes grid from container div
function makeGrid (col, row){
    for (let i = 0; i < (col *row); i ++){
        const div = document.createElement('div')
        div.style.border = "1px solid black"
        containter.style.gridTemplateColumns = `repeat (${col}, 1fr)`;
        containter.style.gridTemplateRows = `repeat ( ${row }, 1fr)`;
        containter.appendChild(div).classList.add('box')
    }


    }
    makeGrid (16,16)

