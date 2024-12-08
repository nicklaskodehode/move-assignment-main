const boxPlayer = document.querySelector("#box");

const boxSpeed = 50;
let posLeft = 250;
let posTop = 250;

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        posTop -= boxSpeed;
    }
    if (e.key === "ArrowRight") {
        posLeft += boxSpeed;
    }
    if (e.key === "ArrowDown") {
        posTop += boxSpeed;
    }
    if (e.key === "ArrowLeft") {
        posLeft -= boxSpeed;
    }
}
);

window.addEventListener("click", (e) => {
    let boxPos = boxPlayer.getBoundingClientRect();
    posLeft = e.clientX - (boxPos.width/2);
    posTop = e.clientY - (boxPos.height/2); 
});

function moveBox() {
    const boxRect = boxPlayer.getBoundingClientRect();
    let boxLeft = boxRect.left + (posLeft - boxRect.left) * 0.1;
    let boxTop = boxRect.top + (posTop - boxRect.top) * 0.1;    

    boxPlayer.style.left = boxLeft + 'px';
    boxPlayer.style.top = boxTop + 'px';

    requestAnimationFrame(moveBox);
}

requestAnimationFrame(moveBox);

