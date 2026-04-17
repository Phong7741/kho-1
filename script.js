const board = document.getElementById("game-board");

const items = ["🍙","🍚","🌿","🍎"];
let cards = [...items, ...items];

cards.sort(() => Math.random() - 0.5);

let first = null;
let second = null;
let lock = false;

cards.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.textContent = "?";

    div.onclick = () => {
        if (lock || div.textContent !== "?") return;

        div.textContent = item;

        if (!first) {
            first = {div, item};
        } else {
            second = {div, item};
            lock = true;

            setTimeout(() => {
                if (first.item !== second.item) {
                    first.div.textContent = "?";
                    second.div.textContent = "?";
                }

                first = null;
                second = null;
                lock = false;
            }, 600);
        }
    };

    board.appendChild(div);
});
