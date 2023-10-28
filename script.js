let main = document.getElementById("main");
let i = 1;

// Utilise un écouteur d'événements pour le bouton gauche
document.getElementById("left").addEventListener("click", returnPicture);

function returnPicture() {
    if (i > 1) {
        i--; // Décrémente i s'il est supérieur à 1
        main.src = `images/${i}.jpg`; // Change la source de l'image
    }
}

// Utilise un écouteur d'événements pour le bouton droit
document.getElementById("right").addEventListener("click", changePicture);

function changePicture() {
    if (i < 17) {
        i++; // Incrémente i s'il est inférieur à 6
        main.src = `images/${i}.jpg`; // Change la source de l'image
    }
}

