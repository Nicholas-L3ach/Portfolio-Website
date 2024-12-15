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

const traditionalGallery = ["traditional-gallery/1.jpg", "Tekaye, Oil",
                            "traditional-gallery/2.jpg", "Billy, Oil",
                            "traditional-gallery/3.jpg", "Self-Portrait, Oil",
                            "traditional-gallery/4.jpg", "Blazing Flowers, Oil",
                            "traditional-gallery/5.jpg", "Marshall, Oil",
                            "traditional-gallery/13.jpg", "Ishmon, Oil",
                            "traditional-gallery/51.jpg", "Girl in Warm Light, Oil",
                            "traditional-gallery/53.jpg", "Covington Trees, Oil",
                            "traditional-gallery/6.webp", "Leave Your Mark, POSCA",
                            "traditional-gallery/7.webp", "Helpless Vitality, POSCA",
                            "traditional-gallery/9.webp", "Tia, POSCA",
                            "traditional-gallery/24.webp", "Mason, POSCA",
                            "traditional-gallery/33.webp", "Rich Malone, POSCA",
                            "traditional-gallery/35.webp", "Les nageurs du Lake Forest Ranch, POSCA",
                            "traditional-gallery/34.webp", "Commisioned Couple, POSCA",
                            "traditional-gallery/49.jpg", "Camp Macon Skit Night, POSCA",
                            "traditional-gallery/50.jpg", "Ish!, POSCA",
                            "traditional-gallery/42.jpg", "Ellie & Mason, POSCA",
                            "traditional-gallery/40.jpg", "Thaxton, POSCA",
                            "traditional-gallery/21.jpg", "Across the River, Acrylic",
                            "traditional-gallery/22.jpg", "Komo Inn, Acrylic",
                            "traditional-gallery/32.webp", "Brick Street Corner, Plein Air Acrylic",
                            "traditional-gallery/25.webp", "Soul City, Watercolor",
                            "traditional-gallery/36.webp", "Storybook Rose, Watercolor",
                            "traditional-gallery/43.jpg", "Watercolor Study",
                            "traditional-gallery/44.jpg", "Through Hedermen, Watercolor",
                            "traditional-gallery/45.jpg", "Red Hotel, Watercolor",
                            "traditional-gallery/23.jpg", "Two Noels, Colored Pencil",
                            "traditional-gallery/38.webp", "Sargent Study, Colored Pencil",
                            "traditional-gallery/Two Sides.jpg", "Two Sides, Colored Pencil",
                            "traditional-gallery/46.jpg", "Indulgence (Coping Series), Printmaking",
                            "traditional-gallery/47.jpg", "Distraction (Coping Series), Printmaking",
                            "traditional-gallery/48.jpg", "Self Harm (Coping Series), Printmaking",
                            "traditional-gallery/8.webp", "Tintoretto Study, Charcoal",
                            "traditional-gallery/20.webp", "Samuel Gore Tribute, Charcoal",
                            "traditional-gallery/41.jpg", "David, Charcoal",
                            "traditional-gallery/10.webp", "Winston Churchill, Graphite",
                            "traditional-gallery/11.webp", "Audrey Hepburn, Graphite",
                            "traditional-gallery/14.webp", "Twisting Self-Portrait, Graphite",
                            "traditional-gallery/15.webp", "Verism (Realism Series), Graphite",
                            "traditional-gallery/16.webp", "Social Realism (Realism Series), Graphite",
                            "traditional-gallery/17.webp", "Contemporary Realism (Realism Series), Graphite",
                            "traditional-gallery/18.webp", "Photorealism (Realism Series), Graphite",
                            "traditional-gallery/19.webp", "Sketchbook Page, Graphite",
                            "traditional-gallery/26.webp", "Gracie Lou, Graphite",
                            "traditional-gallery/27.webp", "Harry Styles, Graphite",
                            "traditional-gallery/29.webp", "Ish & Sunflowers, Graphite",
                            "traditional-gallery/30.webp", "Jackie Hill Perry, Graphite",
                            "traditional-gallery/31.webp", "Angular Bust, Graphite",
                            "traditional-gallery/37.webp", "Robin Williams, Graphite",
                            "traditional-gallery/39.webp", "Q-Tip Portrait, Graphite",
                            "traditional-gallery/54.webp", "JFK, Graphite",
                            "traditional-gallery/55.webp", "Sammie Rae, Graphite",
                            "traditional-gallery/28.webp", "Scarred, Ink"
                        ];
//artFrame.style.backgroundImage = traditionalGallery[0];

let currentArt = 0;
let zoomedOut = true;
let thumbnailMenu = false;

//Function
for (let i = 0; i < traditionalGallery.length; i += 2) {
    addThumbnail(i);
}

function addThumbnail(i) {
    let newThumbnail = document.createElement("img");
    galleryThumbnails.appendChild(newThumbnail);
    newThumbnail.className = "thumbnail";
    newThumbnail.src = traditionalGallery[i];
    newThumbnail.alt = traditionalGallery[i + 1];
    newThumbnail.onclick = function() {
        currentArt = i;
        expandedBG.style.display = "flex";
        expandedFrame.src = traditionalGallery[currentArt];
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

    artFrame.src = traditionalGallery[currentArt];
});

arrowForward.addEventListener("click", function() {
    if (currentArt >= 0 && currentArt < traditionalGallery.length) {
        currentArt++;
    }


    console.log(currentArt);
    console.log(traditionalGallery.length);
    artFrame.src = traditionalGallery[currentArt];
});

artFrame.onclick = function() {
    expandedBG.style.display = "flex";
    expandedFrame.style.backgroundImage = "url(" + traditionalGallery[currentArt]; + ")";
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