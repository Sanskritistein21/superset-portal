// Custom triangle cursor
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

/* Add custom cursor style */
const style = document.createElement("style");
style.innerHTML = `
.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background: transparent;
    border-left: 10px solid #FFD700;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    pointer-events: none;
    transform: translate(-50%, -50%) rotate(45deg);
}
`;
document.head.appendChild(style);

console.log("Welcome to the Superset Portal!");
