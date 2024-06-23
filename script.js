document.addEventListener('DOMContentLoaded', () => {
    const likeIcons = document.querySelectorAll('.like-icon');

    likeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('liked');
        });
    });
});
