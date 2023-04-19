
document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.container');
   
    for (let i = 0; i<4; i++){
        const divi = document.createElement('div')
        divi.classList.add('flex-container')
        container.appendChild(divi);
        for (let y = 0; y<4; y++){
            const divy = document.createElement('div');
            divy.textContent = 'hi';
            divi.appendChild(divy);
        } 
    }
});