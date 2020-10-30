((d) => {

    let burgerMenu = document.getElementById('burger-button');

    let overlay = document.getElementById('burger-overlay');

    burgerMenu.addEventListener('click', function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

})(document);

