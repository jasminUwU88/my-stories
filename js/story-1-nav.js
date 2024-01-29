fetch('story-1-nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_story-1-nav");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})