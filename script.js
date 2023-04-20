//ensures DOM loads before script runs
document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.container');
   
    //creates the 16x16 grid, first makes 16 rows, then 16 divs in those rows 
    for (let i = 0; i<16; i++){
        const divi = document.createElement('div')
        divi.classList.add('flex-container')
        container.appendChild(divi);
        for (let y = 0; y<16; y++){
            const divy = document.createElement('div');
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
    
    gridDiv.forEach(function(div){
        div.addEventListener('mouseleave', function(){
            div.classList.remove('hovered');
        })
    })

});