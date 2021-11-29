const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(theClickeOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickeOne) fast.checked = false;
        if(cheap === theClickeOne) good.checked = false;
        if(fast === theClickeOne) cheap.checked = false;
    }
}