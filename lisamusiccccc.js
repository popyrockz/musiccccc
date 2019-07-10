const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: '紅蓮華',
        artist: 'LiSA。',
        url: 'https://drive.google.com/uc?export=download&id=1YwYs6Pfv06AIbA2f4jXhHWGKJyx8qrOY',
        cover: 'https://4.bp.blogspot.com/-NBpdOOBBgVM/XSGywdAlY2I/AAAAAAAACRY/2p22bkfyHdICgkBDAdWs32HrBUc0Y0KUgCLcBGAs/s1600/cover.jpg',
        theme: '#ebd0c2'
    }]
});
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');a
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});

$.ajax({
    url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529',
    success: function (list) {
        ap8.list.add(JSON.parse(list));
    }
});
