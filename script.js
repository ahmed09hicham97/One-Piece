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
        i++; // Incrémente i s'il est inférieur à 17 (au lieu de 6)
        main.src = `images/${i}.jpg`; // Change la source de l'image
    }
}
// pour précharger les photos
const preloadImages = () => {
    for (let j = i + 1; j <= 17; j++) {
        const img = new Image();
        img.src = `images/${j}.jpg`;
    }
};
preloadImages();


document.getElementById("btnSong").addEventListener("click", playMusic);

let a = 1;
let song = "pause";
let music = new Audio(`songs/Song${a}.mp3`); // Charger la musique une seule fois

function playMusic() {
    if (song === "pause") {
        song = "play";
        music.play();
        document.getElementById("play").src = "https://cdn-icons-png.flaticon.com/512/16/16427.png";
        a=2
    } else {
        song = "pause"; // Mettre la chanson en pause
        music.pause();
        document.getElementById("play").src = "https://cdn-icons-png.flaticon.com/512/0/375.png";
    }
}


const themeBtn = document.getElementById("theme-btn");
let darkMode = true;

themeBtn.addEventListener("click", () => {
    if (darkMode) {
        document.documentElement.style.setProperty('--bgColor', 'var(--bgColor-light)');
        document.documentElement.style.setProperty('--textColor', 'var(--textColor-light)');
        document.getElementById("changeThm").src = "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/light-mode-toggle-icon.png"
        darkMode = false;
    } else {
        document.documentElement.style.setProperty('--bgColor', 'var(--bgColor-dark)');
        document.documentElement.style.setProperty('--textColor', 'var(--textColor-dark)');
        document.getElementById("changeThm").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6diERHN6SJiWWFLnVUQ2XCQ0O58FNgRQ3yT2uxWFxT1Q1kdyXKSKfG4Hhzj2veZnzrY&usqp=CAU"
        darkMode = true;
    }
});
