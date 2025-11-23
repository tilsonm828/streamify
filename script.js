// Example movie thumbnails
const m3u8List = {
    cbsn: "https://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8",
    cnn0: "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_4_1064000.m3u8",
    newm: "https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8",
    bloo: "https://www.bloomberg.com/media-manifest/streams/us.m3u8",
    yaho: "https://d1ewctnvcwvvvu.cloudfront.net/playlist.m3u8",
    cna0: "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_4.m3u8",
    alja: "https://live-hls-aje-ak.getaj.net/AJE/01.m3u8",
    nhkw: "https://media-tyo.hls.nhkworld.jp/hls/w/live/master.m3u8",
    trtw: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
    gnew: "https://live.corusdigitaldev.com/groupa/live/48a5882b-a1ec-42d7-bfd7-6c2739e737da/live.isml/.m3u8",
    pbsk: "https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8",
    flix: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50&amp;live=1&amp;app_bundle=com.plexapp.desktop",
    
};

// Example movie thumbnails
const usNews = [
    "images/cbsn.png",
    "images/cnn0.png",
    "images/newm.png",
    "images/bloo.png",
    "images/yaho.png"
];

const worldNews = [
    "images/cna0.png",
    "images/alja.png",
    "images/nhkw.png",
    "images/trtw.png",
    "images/gnew.png"
];

const kidsTV = [
    "images/pbsk.png",
    "images/flix.png",
    // "images/nhkw.png",
    // "images/trtw.png",
    // "images/gnew.png"
];

function onThumbnailClick(chName) {
    // images\alja.png
    let newM3u8 = m3u8List[chName];
    changeM3u8(newM3u8);
}

function loadRow(rowId) {
    const row = document.getElementById(rowId);

    switch (rowId) {
        case "usNews":
            logoSrc = usNews;
            urls = usNews;
            break;
        case "worldNews":
            logoSrc = worldNews;
            urls = worldNews;
            break;
        case "kidsTV":
            logoSrc = kidsTV;
            urls = kidsTV;
            break;
        default:
            urls = [];
            break;
    }

    logoSrc.forEach((url) => {
        const div = document.createElement("div");
        div.classList.add("carousel-item");
        div.style.backgroundImage = `url(${url})`;
        div.addEventListener("click", () => onThumbnailClick(url.slice(7,11)));
        row.appendChild(div);
    });
}



loadRow("usNews");
loadRow("worldNews");
loadRow("kidsTV");


// --- from file ---

function startUp() {
    const video = document.getElementById('video');
    const hlsUrl = 'https://www.bloomberg.com/media-manifest/streams/us.m3u8'; // ← your m3u8 URL

    if (Hls.isSupported()) {
    const hls = new Hls({
        // Optional config
        xhrSetup: function(xhr, url) {
        // Add headers if your stream requires authentication
        // xhr.setRequestHeader('Authorization', 'Bearer your-token');
        }
    });
    hls.loadSource(hlsUrl);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
    }
    // Safari on macOS/iOS supports HLS natively
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = hlsUrl;
    video.addEventListener('loadedmetadata', function() {
        video.play();
    });
    }
}

function changeM3u8(nM3u8) {
     // ← your m3u8 URL

    const video = document.getElementById('video');
    const hlsUrl = nM3u8; // ← your m3u8 URL

    if (Hls.isSupported()) {
    const hls = new Hls({
        // Optional config
        xhrSetup: function(xhr, url) {
        // Add headers if your stream requires authentication
        // xhr.setRequestHeader('Authorization', 'Bearer your-token');
        }
    });
    hls.loadSource(hlsUrl);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
    }
    // Safari on macOS/iOS supports HLS natively
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = hlsUrl;
    video.addEventListener('loadedmetadata', function() {
        video.play();
    });
    }

}

startUp();

