/* 
toggle for the accordion setup for samples.html
*/

document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll('[data-accordion-target]');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetID = this.getAttribute('data-accordion-target');
            const targetBody = document.querySelector(targetID);

            if (targetBody) {
                targetBody.classList.toggle('hidden');
            }
        })
    })
});