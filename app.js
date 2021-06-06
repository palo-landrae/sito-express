var express = require('express');
var app = express();
const path = require('path');

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/modalita', function (req, res) {
    res.sendFile(path.join(__dirname, 'modalita.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/campioni', function (req, res) {
    res.sendFile(path.join(__dirname, 'campioni.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/nav.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'nav.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/nunu_animation.mp4', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/nunu_animation.mp4')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/summoners_rift.mp4', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/summoners_rift.mp4')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/fonts/beaufortforlol-regular.ttf', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/fonts/beaufortforlol-regular.ttf')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/fonts/beaufortforlol-italic.ttf', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/fonts/beaufortforlol-italic.ttf')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/images/akali-card.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/images/akali-card.jpg')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/images/aphelios-card.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/images/aphelios-card.jpg')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/images/garen-card.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/images/garen-card.jpg')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/images/ryze-card.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/images/ryze-card.jpg')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/images/about/summoners_rift.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/images/about/summoners_rift.jpg')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/images/about/urf.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/images/about/urf.png')); //__dirname : Ritorna la cartella del progetto
});

app.get('/assets/images/about/nexus_blitz.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets/images/about/nexus_blitz.png')); //__dirname : Ritorna la cartella del progetto
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});


