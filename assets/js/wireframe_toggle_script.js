/*
Locates button and wireframe items and sets wireframe items to hidden and then
allows button to toggen hidden on and off
*/


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const wireframeItems = document.querySelectorAll('.wireframe-item');

    wireframeItems.forEach(item => {
        item.classList.add('hidden');
    });

    toggleButton.addEventListener('click', function () {
            wireframeItems.forEach(item => {
                item.classList.toggle('hidden');
        });
    });
});


