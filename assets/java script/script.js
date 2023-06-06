var video = document.getElementById("main-video");

video.addEventListener("ended", function() {
  video.currentTime = 0; // Reset the video to the beginning
  video.play(); // Start playing the video again
});

