const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove" , (dets) => {
    const x = dets.x;
    const y = dets.y;

    const spanEl = document.createElement("span");
    bodyEl.append(spanEl)

    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";

    const size = Math.random() * 100;
    spanEl.style.height = size + "px";
    spanEl.style.width = size + "px";

    setTimeout(()=>{
        spanEl.remove();
    }, 3000)
})