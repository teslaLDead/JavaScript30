const videoPlayer=document.querySelector('.player__video')
const pauseButton=document.querySelector('.player__button')
const volumeControl=document.querySelector('input[name=volume]')
const playbackRateControl=document.querySelector('input[name=playbackRate]')
const progressBar=document.querySelector('.progress')
const progressBarFilled=document.querySelector('.progress__filled')
const skipButton=document.querySelectorAll('[data-skip]');


function togglePlay(){
    console.log('yoo')
    if(videoPlayer.paused) videoPlayer.play()
    else videoPlayer.pause()
}

function volumeChange(){
    videoPlayer.volume=volumeControl.value;
}

function skip() {
    videoPlayer.currentTime+=parseFloat(this.dataset.skip);
}

function playebackControl(){
    videoPlayer.playbackRate=playbackRateControl.value;
}
let percentCompleted;
function progressBarControl(){
    percentCompleted=(videoPlayer.currentTime/videoPlayer.duration)*100;
    // console.log('yo')
    progressBarFilled.style.flexBasis=`${percentCompleted}%`;
}

function scrub(e) {
    console.log(e)
}

videoPlayer.onclick=togglePlay;
pauseButton.onclick=togglePlay;
volumeControl.onchange=volumeChange;
playbackRateControl.onchange=playebackControl;
videoPlayer.onprogress=progressBarControl;
videoPlayer.addEventListener('timeupdate',progressBarControl)
skipButton.forEach(element => {
    element.addEventListener('click',skip)
});
progressBar.addEventListener('click',scrub)