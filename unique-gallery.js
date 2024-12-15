//Declarations
const artFrame = document.getElementById("art-frame");
const arrowBack = document.getElementById("arrow-back");
const arrowForward = document.getElementById("arrow-forward");
const galleryThumbnails = document.getElementById("gallery-thumbnails");
const expandedBG = document.getElementById("expanded-bg");
const expandedFrame = document.getElementById("expanded-frame");
const nav = document.querySelector("nav");
const galleryButton = document.getElementById("gallery-button");
const Gallery = document.getElementById("gallery");
const Aside = document.querySelector("aside");
const artTitle = document.getElementById("art-title");

const uniqueGallery = [
                            "unique-gallery/1.png", "Title",
                            "unique-gallery/2.png", "Title",
                            "unique-gallery/3.png", "Title",
                            "unique-gallery/4.png", "Title",
                            "unique-gallery/5.png", "Title"
                        ];
//artFrame.style.backgroundImage = uniqueGallery[0];

let currentArt = 0;
let zoomedOut = true;
let thumbnailMenu = false;

//Function
for (let i = 0; i < uniqueGallery.length; i += 2) {
    addThumbnail(i);
}

function addThumbnail(i) {
    let newThumbnail = document.createElement("img");
    galleryThumbnails.appendChild(newThumbnail);
    newThumbnail.className = "thumbnail";
    newThumbnail.src = uniqueGallery[i];
    newThumbnail.alt = uniqueGallery[i + 1];
    newThumbnail.onclick = function() {
        currentArt = i;
        expandedBG.style.display = "flex";
        expandedFrame.src = uniqueGallery[currentArt];
        //nav.style.display = "none";
        if (thumbnailMenu) {
            Gallery.style.display = "flex";
            galleryThumbnails.style.display = "none";
            thumbnailMenu = false;
        }
    }

    newThumbnail.onmouseover = function() {
        artTitle.style.display = "block";
        artTitle.style.left = window.event.clientX.toString() + "px";
        artTitle.style.top = window.event.clientY.toString() + "px";
        artTitle.innerHTML = newThumbnail.alt;
        console.log(window.event.clientX);
    }
}

/*arrowBack.addEventListener("click", function() {
    if (currentArt > 0) {
        currentArt--;
    } else { currentArt = 0 }

    artFrame.src = uniqueGallery[currentArt];
});

arrowForward.addEventListener("click", function() {
    if (currentArt >= 0 && currentArt < uniqueGallery.length) {
        currentArt++;
    }


    console.log(currentArt);
    console.log(uniqueGallery.length);
    artFrame.src = uniqueGallery[currentArt];
});

artFrame.onclick = function() {
    expandedBG.style.display = "flex";
    expandedFrame.style.backgroundImage = "url(" + uniqueGallery[currentArt]; + ")";
    nav.style.display = "none";
}
*/
expandedFrame.onclick = function() {
    expandedBG.style.display = "none";
    nav.style.display = "flex";
}

/*galleryButton.onclick = function() {
    if (!thumbnailMenu) {    
        Gallery.style.display = "none";
        galleryThumbnails.style.display = "flex";
        thumbnailMenu = true;
        galleryButton.style.backgroundImage = "url('../Assets/X.svg')";
    } else {
        Gallery.style.display = "flex";
        galleryThumbnails.style.display = "none";
        thumbnailMenu = false;
        galleryButton.style.backgroundImage = "url('../Assets/Gallery-Icon.svg')";
    }
}*/