// Отримуємо елементи форми
const form = document.querySelector('.form');
const delayInput = form.querySelector('[name="delay"]');
const stateRadioButtons = form.querySelectorAll('[name="state"]');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Отримуємо значення затримки та обраного стану
    const delay = parseInt(delayInput.value, 10);
    const state = Array.from(stateRadioButtons).find(input => input.checked)?.value;

    // Створюємо проміс
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else if (state === 'rejected') {
                reject(delay);
            }
        }, delay);
    });

    // Обробка промісу
    promise
        .then((fulfilledDelay) => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${fulfilledDelay}ms`,
            });
        })
        .catch((rejectedDelay) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${rejectedDelay}ms`,
            });
        });
});
