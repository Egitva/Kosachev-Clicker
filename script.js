var counter = 0;
var mnoj = 1;
var clicks = document.getElementById('clicks');
var mnog = document.getElementById('mnog');
var small_cookie_container = document.getElementById('small_cookie_container');
var danila = document.getElementById('danila');

cookie_btn.addEventListener('click', () => {
    counter += 1 * mnoj;
    clicks.innerText = 'CLICKS: ' + counter;
});

danila.onclick = function() {
    if (counter >= 50) {
        counter -= 50
        clicks.innerText = 'CLICKS: ' + counter;
        mnoj += 0.5;
        mnog.innerText = 'X' + mnoj;
    }
}

danila2.onclick = function() {
    if (counter >= 5000) {
        counter -= 5000
        clicks.innerText = 'CLICKS: ' + counter;
        mnoj += 65;
        mnog.innerText = 'X' + mnoj;
    }
}