const images = ["0.JPG","1.JPG","2.JPG","3.JPG","4.JPG","5.JPG","6.JPG","7.JPG","8.JPG","9.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const BG_CLASSNAME = "bgImg";
const CV_CLASSNAME = "cvImg";

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add(BG_CLASSNAME);
const cvImage = document.createElement("img");
cvImage.classList.add(CV_CLASSNAME);

document.body.appendChild(bgImage);
document.body.appendChild(cvImage);