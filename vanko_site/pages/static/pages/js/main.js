

function hamburgerToggle(x) {
    x.classList.toggle("change");

    //Code to toggle dropdown menu
    let menu = document.getElementById('dropMenu');

    if (menu.classList.contains('retracted')) {
        menu.classList.remove('retracted');
        menu.classList.add('extended');
    } else {
        menu.classList.remove('extended');
        menu.classList.add('retracted');
    }

};



