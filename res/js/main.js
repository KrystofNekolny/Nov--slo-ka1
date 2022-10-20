const boxes = document.getElementsByClassName("box");
console.log(boxes);
const names = ["Jan","Honza","Čenda"];

window.onload = () => {
    [...boxes].forEach((box) => {
box.onclick = () => {
    document.body.style.backgroundColor = box.dataset.color;
    box.innerText++;
};
    }

    );
};