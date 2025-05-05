document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="job"]');
    const expertAuth = document.querySelector('.expert-auth');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === '졸업생' || this.value === '대학생') {
                expertAuth.style.display = 'flex';
            } else {
                expertAuth.style.display = 'none';
            }
        });
    });
});