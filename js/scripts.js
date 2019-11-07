$(".choice").on("click", function() {
    console.log("test");
    $(".choice").removeClass("expand unset overflow overflow-auto");
    $(".choice").addClass("small");
    $(this).removeClass("small");
    $(this).addClass("expand overflow overflow-auto");
})


const elJumbo = document.querySelector(".reload");
elJumbo.addEventListener('click', backToHome);

function backToHome() {
    window.location.reload(true);
}

const elButton = document.querySelector(".loginButton");
elButton.addEventListener('mouseover', hoverBgColor);
elButton.addEventListener('mouseout', unhoverBgColor);

function hoverBgColor() {
    elButton.style.color = 'white';
    elButton.style.background = 'black';
}

function unhoverBgColor() {
    elButton.style.color = 'black';
    elButton.style.background = '#1dff00';
}

const elCardButton = document.querySelector(".cardButton");
elCardButton.addEventListener('mouseover', cardHoverBgColor);
elCardButton.addEventListener('mouseout', cardUnhoverBgColor);

function cardHoverBgColor() {
    elCardButton.style.color = 'black';
    elCardButton.style.background = 'white';
}

function cardUnhoverBgColor() {
    elCardButton.style.color = 'white';
    elCardButton.style.background = 'black';
}