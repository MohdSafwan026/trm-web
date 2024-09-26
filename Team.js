document.getElementById('menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    if (navList.classList.contains('hidden')) {
        navList.classList.remove('hidden');
    } else {
        navList.classList.add('hidden');
    }
});

document.querySelectorAll('.member img').forEach(item => {
    item.addEventListener('click', function() {
        var memberName = this.parentElement.getAttribute('data-member');
        alert('You clicked on ' + memberName);
    });
});
