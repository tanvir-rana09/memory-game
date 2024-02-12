const emojis = ['🌟', '🌟', '🍎', '🍎', '🍒', '🍒', '🌈', '🌈', '🐱', '🐱', '🦄', '🦄', '🌼', '🌼', '🍭', '🍭'];
const suflEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item ';
    box.innerHTML = suflEmojis[i];

    box.onclick = function () {
        this.classList.add('boxopen')
        setTimeout(() => {
            if (document.querySelectorAll('.boxopen').length > 1) {

                if (document.querySelectorAll('.boxopen')[0].innerHTML == document.querySelectorAll('.boxopen')[1].innerHTML) {

                    document.querySelectorAll('.boxopen')[0].classList.add('boxmatch');
                    document.querySelectorAll('.boxopen')[1].classList.add('boxmatch');

                    document.querySelectorAll('.boxopen')[1].classList.remove('boxopen');
                    document.querySelectorAll('.boxopen')[0].classList.remove('boxopen');

                    if (document.querySelectorAll('.boxmatch').length == emojis.length) {
                        document.querySelector('.win').innerHTML = ' You finally won';
                    }
                }
                else {
                    document.querySelectorAll('.boxopen')[1].classList.remove('boxopen');
                    document.querySelectorAll('.boxopen')[0].classList.remove('boxopen');
                }
            }
        }, 500);
    }
    document.querySelector('.results').appendChild(box);
}