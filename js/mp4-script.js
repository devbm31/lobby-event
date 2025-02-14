const videoFiles = [
  "videos/lobby_1-1.mp4",
  "videos/lobby_1-2.mp4",
  "videos/lobby_1-3.mp4",
  "videos/lobby_1-4.mp4",
  "videos/lobby_1-5.mp4",
];

let currentVideoIndex = 0;
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");

videoPlayer.addEventListener("ended", function () {
  currentVideoIndex++;
  if (currentVideoIndex < videoFiles.length) {
    videoSource.src = videoFiles[currentVideoIndex];
    videoPlayer.load();
    videoPlayer.play();
  }
});

function showAlert() {
  alert("버튼이 클릭되었습니다!");
}
