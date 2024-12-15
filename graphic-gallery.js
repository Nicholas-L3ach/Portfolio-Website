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

const graphicGallery = [
                            "graphic-gallery/1.webp", "Title",
                            "graphic-gallery/2.webp", "Title",
                            "graphic-gallery/3.webp", "Title",
                            "graphic-gallery/5.webp", "Title",
                            "graphic-gallery/6.webp", "Title",
                            "graphic-gallery/7.webp", "Title",
                            "graphic-gallery/8.webp", "Title",
                            "graphic-gallery/9.webp", "Title",
                            "graphic-gallery/10.webp", "Title",
                            "graphic-gallery/11.webp", "Title",
                            "graphic-gallery/12.webp", "Title"
                        ];
//artFrame.style.backgroundImage = graphicGallery[0];

let currentArt = 0;
let zoomedOut = true;
let thumbnailMenu = false;

//Function
for (let i = 0; i < graphicGallery.length; i += 2) {
    addThumbnail(i);
}

function addThumbnail(i) {
    let newThumbnail = document.createElement("img");
    galleryThumbnails.appendChild(newThumbnail);
    newThumbnail.className = "thumbnail";
    newThumbnail.src = graphicGallery[i];
    newThumbnail.alt = graphicGallery[i + 1];
    newThumbnail.onclick = function() {
        currentArt = i;
        expandedBG.style.display = "flex";
        expandedFrame.src = graphicGallery[currentArt];
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

    artFrame.src = graphicGallery[currentArt];
});

arrowForward.addEventListener("click", function() {
    if (currentArt >= 0 && currentArt < graphicGallery.length) {
        currentArt++;
    }


    console.log(currentArt);
    console.log(graphicGallery.length);
    artFrame.src = graphicGallery[currentArt];
});

artFrame.onclick = function() {
    expandedBG.style.display = "flex";
    expandedFrame.style.backgroundImage = "url(" + graphicGallery[currentArt]; + ")";
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