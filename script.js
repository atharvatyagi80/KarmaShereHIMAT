document.addEventListener('DOMContentLoaded', () => {
    const likeIcons = document.querySelectorAll('.like-icon');

    likeIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('ri-thumb-up-line')) {
                icon.classList.remove('ri-thumb-up-line');
                icon.classList.add('ri-thumb-up-fill', 'liked');
            } else {
                icon.classList.remove('ri-thumb-up-fill', 'liked');
                icon.classList.add('ri-thumb-up-line');
            }
        });
    });
});
