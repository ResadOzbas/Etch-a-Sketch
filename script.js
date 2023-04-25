

//ensures DOM loads before script runs
function createGrid(grids = 100){
    
    const container = document.querySelector('.container');
    const input = document.querySelector('.input')
   
    //creates the 16x16 grid, first makes 16 rows, then 16 divs in those rows
    //height and width of divs need to be 100/x%, x being number of grids, max 100 
    for (let i = 0; i<grids; i++){
        const divi = document.createElement('div')
        divi.classList.add('flex-container')
        divi.style.height = (100/grids) + '%'
        container.appendChild(divi);
        for (let y = 0; y<grids; y++){
            const divy = document.createElement('div');
            divy.style.width = (100/grids) + '%'
            divi.appendChild(divy);
        } 
    }
    const gridDiv = document.querySelectorAll('.flex-container div');
    
    //Event listener for hovoring grid, change colour
    gridDiv.forEach(function(div){
        div.addEventListener('mouseenter', function(){
            div.classList.add('hovered');
        })
    })

};

function inputClicked(){
    console.log('works');  
    const userInput = prompt('how many grids would you like? (max 100)');
    createGrid(userInput)
};


 /* 
 document.addEventListener('DOMContentLoaded', function(){
    createGrid()
})

    gridDiv.forEach(function(div){
        div.addEventListener('mouseleave', function(){
            div.classList.remove('hovered');
        })
    })
*/   