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


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("postimg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}