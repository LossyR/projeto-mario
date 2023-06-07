const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");


function alternalModal(){
    modal.classList.toggle("aberto");

}

botaoTrailer.addEventListener("click", () => {

    modal.classList.toggle("aberto");
});

botaoFecharModal.addEventListener("click", () => {
    alternalModal();
    video.setAttribute("src", linkDoVideo);
});

