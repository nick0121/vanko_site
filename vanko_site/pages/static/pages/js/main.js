

function hamburgerToggle(x) {
    x.classList.toggle("change");

    let drop = document.getElementById('dropMenu');
    if (drop.style.top === "") {
        drop.style.top = 60 + 'px';
    } else if (drop.style.top === "-154px") {
        drop.style.top = 60 + 'px';
    } else if (drop.style.top === "0px") {
        drop.style.top = -154 + 'px';
    } else if (drop.style.top === "60px") {
        drop.style.top = -154 + 'px';
    }

};



