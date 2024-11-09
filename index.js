const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Modal Open Function
const openModal = () => {
      console.log("Modal is Open");
      modal.classList.add("active");
      overlay.classList.add("overlayactive");
};

// Modal Close Function
const closeModal = () => {
    // console.log("Modal is Close");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};

const follow = document.querySelector('.btn-follow');
follow.addEventListener('click', function(){
       alert("Thank You For Follow Me")
});