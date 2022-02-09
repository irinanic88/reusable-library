const progressBarCollection = document.querySelectorAll('.progress-bar');
const valueContainerCollection = document.querySelectorAll('.value-container');

let progressValue = 0;
let progressEndValue = 28;
let speed = 50;

const progress = setInterval(() => {

    progressValue++;
    valueContainerCollection.forEach(container => container.textContent = `${progressValue}%`);

    progressBarCollection.forEach(item => {
        item.style.background = `conic-gradient(
        var(--primary) ${progressValue * 3.6}deg, var(--font-4) ${progressValue * 3.6}deg
    )`
    });

    if (progressValue === progressEndValue) {
        clearInterval(progress);
    }

}, speed)