document.addEventListener('DOMContentLoaded', function() {
    let colors = [
        '#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400',
    ];

    const btn = document.getElementById('btn');
    const boxesContainer = document.querySelector('.boxes');
    const points = document.querySelector('.points');
    let totalBoxes = 0;

    // render 5 box
    renderBoxes(5);

    //  tao box
    function createBox(color) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = color;

        // click box
        box.addEventListener('click', function() {
            boxesContainer.removeChild(box);
            totalBoxes--;
            points.textContent = totalBoxes;
        });

        return box;
    }

    // tao va render box
    function renderBoxes(num) {
        for (let i = 0; i < num; i++) {
            const color = colors[i % colors.length]; // lap lai mau
            const box = createBox(color);
            boxesContainer.appendChild(box);
            totalBoxes++;
        }
        points.textContent = totalBoxes;
    }

    // click boxes
    btn.addEventListener('click', function() {
        renderBoxes(5);
    });
});
