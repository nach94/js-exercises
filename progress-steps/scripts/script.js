
let btn_prev = document.getElementById('prevBtn');
let btn_next = document.getElementById('nextBtn');

let num_bar = document.querySelector('.numbers');

let current_width = 0;

let step = 0;

let num2 = document.getElementById('2');
let num3 = document.getElementById('3');
let num4 = document.getElementById('4');

function updateWidth() {
    num_bar.style.setProperty('--current-w', current_width + '%');
}

btn_next.addEventListener('click', function () {
    step++;
    if (step === 1) {
        btn_prev.disabled = false;
        num2.classList.add('active');
        current_width += 33.33;
        updateWidth();        
    } else if (step === 2) {
        num3.classList.add('active');
        current_width += 33.33;
        updateWidth();        
    } else if (step === 3) {
        num4.classList.add('active');
        btn_next.disabled = true;
        current_width += 33.33;
        updateWidth();        
    }
})

btn_prev.addEventListener('click', function () {
    step --;    
    if (step === 2) {
        num4.classList.remove('active');
        current_width -= 33.33;
        updateWidth();
        btn_next.disabled = false;
    } else if (step === 1) {
        num3.classList.remove('active');
        current_width -= 33.33;
        updateWidth();
    } else if (step === 0) {
        num2.classList.remove('active');
        current_width -= 33.33;
        updateWidth();
        btn_prev.disabled = true;
    }
})
