var counter = 0;
var mnoj = 1;
var clicks = document.getElementById('clicks');
var small_cookie_container = document.getElementById('small_cookie_container');
var danila1 = document.getElementById('danila1');

cookie_btn.addEventListener('click', () => {
    counter ++;
    clicks.innerText = 'CLICKS: ' + counter * mnoj;
});

danila1.addEventListener = ('click', () => {
    counter -= 50;
    clicks.innerText = 'CLICKS: ' + counter;
    mnoj += 0.5;
});