let selectedDate = null;

const startBtn = document.getElementById("start-btn");
const timerDisplay = document.getElementById("timer");

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    dateFormat: "Y-m-d H:i",
    onClose(selectedDates) {
        const now = new Date();
        if (selectedDates[0] > now) {
            selectedDate = selectedDates[0];
            startBtn.disabled = false;
        } else {
            alert("Будь ласка, оберіть дату в майбутньому");
            startBtn.disabled = true;
        }
    }
});

startBtn.addEventListener("click", () => {
    if (!selectedDate) return;

    const timerInterval = setInterval(() => {
        const now = new Date();
        const diff = selectedDate - now;

        if (diff <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Час настав!";
            return;
        }

        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        timerDisplay.textContent = `Залишилось: ${days}д ${hours}г ${minutes}хв ${seconds}сек`;
    }, 1000);
});
