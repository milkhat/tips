var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player(
    'player', {
      height: '360',
      width: '640',
      videoId: 'AOPMlIIg_38',　//再生する動画ID
      wmode: 'transparent',
      playerVars:{
        loop: 1,　//ループの再生設定
        playlist: 'AOPMlIIg_38',　
        modestbranding: 1,　//youtubeのロゴ表示
        autoplay: 1,　//自動再生
        rel: 0,  //関連動画の表示
        controls: 0,
        showinfo: 0,
        autohide: 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
    }
  );
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}

function onPlayerStateChange(event) {
}