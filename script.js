let progress = document.getElementById("progress");
let song = document.getElementById("song");
let cltIcon = document.getElementById("cltr");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playpause(){
    if(cltIcon.classList.contains("fa-pause")){
        song.pause();
        cltIcon.classList.remove("fa-pause");
        cltIcon.classList.add("fa-play");
    }else{
        song.play();
        cltIcon.classList.add("fa-pause");
        cltIcon.classList.remove("fa-play");

    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    cltIcon.classList.add("fa-pause");
    cltIcon.classList.remove("fa-play");
}