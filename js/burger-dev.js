((d) => {
// burger menu to open mobile overlay
    const burgerMenu = d.getElementById('burger-button');

    const overlay = d.getElementById('burger-overlay');

    burgerMenu.addEventListener('click', function(){
        this.classList.toggle("open");
        overlay.classList.toggle("overlay");
    });
// button to close mobile overlay
    const closeButton = d.getElementById('close-button');

    closeButton.addEventListener('click' , function(){
        overlay.classList.toggle("overlay");
    });


})(document);

