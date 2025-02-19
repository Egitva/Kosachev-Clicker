var counter = 0;
var clicks = document.getElementById('clicks');
var small_cookie_container = document.getElementById('small_cookie_container');

cookie_btn.addEventListener('click', () => {

    counter ++;
    clicks.innerText = 'CLICKS: ' + counter;
});