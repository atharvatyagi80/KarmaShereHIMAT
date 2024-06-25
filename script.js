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


    // Image modal logic
    const modal = document.getElementById("imageModal");
    const modalContent = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".close");
    const modalImage = document.getElementById("modalImage");

    // Function to open the modal with animation and set the image source
    function openModal(imageSrc) {
        modalImage.src = imageSrc; // Set the image source
        modal.style.display = "flex";
        gsap.to(modalContent, { duration: 0.5, top: "50%", ease: "power2.out" });
    }

    // Function to close the modal with animation
    function closeModal() {
        gsap.to(modalContent, { duration: 0.5, top: "-100%", ease: "power2.in", onComplete: () => modal.style.display = "none" });
    }

    // Event delegation to handle image click
    document.addEventListener('click', function(event) {
        const clickedImage = event.target.closest('.post_photo img');
        if (clickedImage) {
            const imageSrc = clickedImage.src; // Get the image source
            openModal(imageSrc);
        }
    });

    // Close modal on close button click
    closeBtn.onclick = closeModal;

    // Close modal on outside click
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };
});
