const tempChanger = document.getElementById("template-changer");
tempChanger.addEventListener("change", () => activateStyle(tempChanger.value))

function activateStyle(linkValue) {
    const existingLink = document.getElementById("style-link");
    if (existingLink) {
        existingLink.remove();
    }

    const newLink = document.createElement("link");
    newLink.id = "style-link";
    newLink.rel = "stylesheet";
    newLink.href = `template${linkValue.slice(-1)}.css`; // Assuming template filenames follow a pattern

    document.head.appendChild(newLink);
}
