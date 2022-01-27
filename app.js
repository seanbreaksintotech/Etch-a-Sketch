
//defining nodes from html
const container = document.querySelector(".container")
const bttnSize = document.createElement('button')
const bttnDraw = document.createElement ('button')
const bttnContainer = document.querySelector('.buttons')

//function that makes grid from container div
function makeGrid (col, rows){
    //loop for rows and cols
    for (let i=0; i < (col *rows); i++){
        
    const div = document.createElement('div')
    div.style.border = "1px solid black";
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat (${rows}, 1fr)`;
    container.appendChild(div).classList.add("cell")

    

    };
};
    makeGrid (16, 16); 


//function that fills cells with color upon clicking bttnDraw
    function blackDraw(){
        const cells = container.querySelectorAll('.cell')
        bttnDraw.textContent ='Draw'

        //click event that leads to hover function 
        bttnDraw.addEventListener('click', () => {
            cells.forEach(cell => cell.addEventListener('mouseover', () =>{
            cell.style.background = 'black';
        }))
        }) 
        bttnContainer.appendChild(bttnDraw).classList.add('btn')
    }
    blackDraw()
//


    function reSet(){
        const cells = container.querySelectorAll('.cell')
        cells.forEach(cell => cell.remove ())
    }
    function reSize (){
        bttnSize.textContent ='Resize'
        bttnSize.addEventListener('click',  () => {
            let user = prompt ("Inupt Dimensions")
            if (user === null)

        })
        bttnContainer.appendChild(bttnSize).classList.add('btn')
    
    }
    reSize()

    
