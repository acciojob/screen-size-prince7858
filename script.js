function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById('sizeInfo');
    sizeInfo.querySelector('h1').textContent = `Width: ${width} and Height: ${height}`;
}
updateWindowSize();
window.addEventListener("resize",updateWindowSize)
