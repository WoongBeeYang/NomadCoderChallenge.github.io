const img = [
  "razer0.jpeg",
  "razer1.jpeg",
  "razer2.jpeg",
  "razer3.jpeg",
]

const imgNumber = img[Math.floor(Math.random() * img.length)];
const bgImg = document.createElement("img");
const imgClass = document.querySelector("img");
bgImg.src = `Image/${imgNumber}`
document.getElementById("bgImg").append(bgImg)

const bgImgSize = document.querySelector("img")
bgImgSize.classList.add("w-[100%]")
