
let c1 = localStorage.getItem('c1');
let m1 = localStorage.getItem('m1');
var counter = 0 + Number(c1);
var mnoj = 1 + Number(m1);
var clicks = document.getElementById('clicks');
var mnog = document.getElementById('mnog');
var small_cookie_container = document.getElementById('small_cookie_container');
var danila = document.getElementById('danila');
clicks.innerText = 'CLICKS: ' + counter;
mnog.innerText = 'X' + mnoj;
let bab = localStorage.getItem('bab');
var back = 0 + Number(bab);
if (back == 1) {
    document.body.style.backgroundImage = "url(img/kenti.jpg)";
}

cookie_btn.addEventListener('click', () => {
    counter += 1 * mnoj;
    clicks.innerText = 'CLICKS: ' + counter;
    localStorage.setItem('c1', counter);
});

danila.onclick = function() {
    if (counter >= 50) {
        counter -= 50;
        clicks.innerText = 'CLICKS: ' + counter;
        mnoj += 0.5;
        mnog.innerText = 'X' + mnoj;
        localStorage.setItem('m1', mnoj);
    }
}

danila2.onclick = function() {
    if (counter >= 5000) {
        counter -= 5000;
        clicks.innerText = 'CLICKS: ' + counter;
        mnoj += 65;
        mnog.innerText = 'X' + mnoj;
        localStorage.setItem('m1', mnoj);
        localStorage.setItem('c1', counter);
    }
}

danila3.onclick = function() {
    if (counter >= 1000000) {
        counter -= 1000000;
        clicks.innerText = 'CLICKS: ' + counter;
        mnoj += 11000;
        mnog.innerText = 'X' + mnoj;
        localStorage.setItem('m1', mnoj);
        document.body.style.backgroundImage = "url(img/kenti.jpg)";
        localStorage.setItem('bab', 1);
        localStorage.setItem('c1', counter);
    }
}

//fvgesifjiofj

// Slot machine logic
const slotSymbols = ['🍒', '🍋', '🍊', '🍉', '⭐', '7️⃣'];
const slots = document.querySelectorAll('#slot-machine .slot');
const spinButton = document.getElementById('spin-button');
const slotResult = document.getElementById('slot-result');

function getRandomSymbol() {
    return slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
}

function checkWin(results) {
    // Simple win condition: all three symbols match
    if (results[0] === results[1] && results[1] === results[2]) {
        return true;
    }
    return false;
}

spinButton.addEventListener('click', () => {
    // Refresh counter and mnoj from localStorage
    counter = Number(localStorage.getItem('c1')) || 0;
    mnoj = 1 + Number(localStorage.getItem('m1')) || 1;

    if (counter < 10) {
        slotResult.innerText = 'Not enough clicks to spin! Need 10.';
        return;
    }
    // Disable spin button during animation
    spinButton.disabled = true;

    counter -= 10;
    clicks.innerText = 'CLICKS: ' + counter;
    localStorage.setItem('c1', counter);

    let results = [];
    let animationIntervals = [];
    let animationDuration = 1000; // 1 second animation
    let animationStartTime = Date.now();

    slots.forEach((slot, index) => {
        animationIntervals[index] = setInterval(() => {
            slot.innerText = getRandomSymbol();
        }, 100);
    });

    setTimeout(() => {
        slots.forEach((slot, index) => {
            clearInterval(animationIntervals[index]);
            const finalSymbol = getRandomSymbol();
            slot.innerText = finalSymbol;
            results.push(finalSymbol);
        });

        if (checkWin(results)) {
            const reward = 100 * mnoj;
            counter += reward;
            clicks.innerText = 'CLICKS: ' + counter;
            localStorage.setItem('c1', counter);
            slotResult.innerText = 'You win! +' + reward + ' clicks!';
        } else {
            slotResult.innerText = 'Try again!';
        }
        // Re-enable spin button after animation
        spinButton.disabled = false;
    }, animationDuration);
});

let area = document.querySelector('#box')
let context = area.getContext("2d")

let interval = {x : 0, y : 0}
let coordinate = {x : 0, y : 0}
let img = {
  speed : 2,
  width : 170,
  height : 100,
  left_side : () => coordinate.x,
  right_side : () => coordinate.x + img.width,
  top_side : () => coordinate.y,
  bottom_side : () => coordinate.y + img.height
}
let anim = {
  draw : () => {
    context.clearRect(0, 0, area.width, area.height)
    context.drawImage(img_dvd, coordinate.x, coordinate.y, img.width, img.height)
  },
  to_right : () => {
    if (img.right_side() >= area.width ) {
      cancelAnimationFrame(interval.x)
      anim.to_left()
    }
    else {
      anim.draw()
      coordinate.x += img.speed
      interval.x = requestAnimationFrame(anim.to_right)
    }
  },
  to_left : () => {
    if (img.left_side() <= 0 ) {
      cancelAnimationFrame(interval.x)
      anim.to_right()
    }
    else {
      anim.draw()
      coordinate.x -= img.speed
      interval.x = requestAnimationFrame(anim.to_left)
    }
  },
  to_bottom : () => {
    if (img.bottom_side() >= area.height ) {
      cancelAnimationFrame(interval.y)
      anim.to_top()
    }
    else {
      anim.draw()
      coordinate.y += img.speed
      interval.y = requestAnimationFrame(anim.to_bottom)
    }
  },
  to_top : () => {
    if (img.top_side() <= 0 ) {
      cancelAnimationFrame(interval.y)
      anim.to_bottom()
    }
    else {
      anim.draw()
      coordinate.y -= img.speed
      interval.y = requestAnimationFrame(anim.to_top)
    }
  }
}

area.width = window.innerWidth
area.height = window.innerHeight

let img_dvd = new Image()
img_dvd.src = 'img/ратмир.jpg'
img_dvd.onload = () => (anim.to_right(), anim.to_bottom())

// New code to handle profit calculation based on input points
const pointsInput = document.getElementById('pointsInput');
const calculateProfitBtn = document.getElementById('calculateProfitBtn');
const profitResult = document.getElementById('profitResult');

calculateProfitBtn.addEventListener('click', () => {
    let inputPoints = Number(pointsInput.value);
    if (isNaN(inputPoints) || inputPoints < 0) {
        profitResult.innerText = 'Пожалуйста, введите корректное положительное число очков.';
        return;
    }
    let profit = inputPoints * mnoj;
    profitResult.innerText = 'Прибыль: ' + profit.toFixed(2) + ' очков';
});
