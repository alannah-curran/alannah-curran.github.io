console.log('Happy developing ✨')

function zoom(img) {
    document.getElementById('zoom').src = img;
    document.getElementById('zoomed-in').style.display = 'flex';
}
function closeZoomed() {
    document.getElementById('zoomed-in').style.display = 'none';
}