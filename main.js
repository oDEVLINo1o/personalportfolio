let catchMeButton = document.getElementById('catchMe');
const theDate = document.getElementById('date');

theDate.innerHTML = new Date().toDateString();


function catchMe() {
    let randNum = Math.floor(Math.random() * 4);
    catchMeButton.innerHTML = 'You got me';
    catchMeButton.style.padding = 1 + 'rem';
    if (randNum === 0) {
        catchMeButton.style.bottom = - 50 + 'px';
        
    }
    else if (randNum === 1) {
        catchMeButton.style.left = + 500 + 'px';
        
    }
    else if (randNum === 2) {
        catchMeButton.style.left = - 50 + 'px';
        
    }
    else  if (randNum === 3) {
        catchMeButton.style.bottom = + 50 + 'px';
        
    }
    
}

//catchMeButton.addEventListener('mouseenter', catchMe);
catchMeButton.addEventListener('mousemove', catchMe);

function gotMe () {
    catchMeButton.innerHTML = 'catch me';
}

catchMeButton.addEventListener('mouseleave', gotMe);

