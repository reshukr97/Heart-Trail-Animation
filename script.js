const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=> {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";
    const randomSize = Math.random() * 100;
    spanEl.style.width = randomSize + "px";
    spanEl.style.height = randomSize + "px";
    bodyEl.appendChild(spanEl);
    setTimeout( ()=> {
        spanEl.remove();
    }, 3000)

})