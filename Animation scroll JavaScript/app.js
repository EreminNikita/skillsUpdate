for (let i = 1; i <= 30; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);


    let boxes = document.querySelectorAll('.box');

    function scrollTriger() {
        boxes.forEach(boxxx => {
            if (boxxx.offsetTop < window.scrollY) {
                boxxx.classList.add('active')
            } else {
                boxxx.classList.remove('active')
            }
        })
    }

    window.addEventListener('scroll', scrollTriger);
}