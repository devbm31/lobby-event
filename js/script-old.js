const gifFiles = [
  { src: "videos/lobby_1-1.gif", duration: 5000 },
  { src: "videos/lobby_1-2.gif", duration: 5000 },
  { src: "videos/lobby_1-3.gif", duration: 2500 },
  { src: "videos/lobby_1-4.gif", duration: 10000 },
  { src: "videos/lobby_1-5.gif", duration: 4700 },
];

let currentGifIndex = 0;
const gifElement = document.getElementById("animatedGif");

function changeGif() {
  gifElement.src = gifFiles[currentGifIndex].src;
  setTimeout(() => {
    currentGifIndex = (currentGifIndex + 1) % gifFiles.length;
    changeGif();
  }, gifFiles[currentGifIndex].duration);
}

changeGif(); // 첫 번째 GIF 시작
