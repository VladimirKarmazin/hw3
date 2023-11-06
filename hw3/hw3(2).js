let fiveDigitNumber = prompt("Введіть п'ятизначне число:");
if (fiveDigitNumber.length === 5) {
    // Розділимо п'ятизначне число на окремі цифри
    let digit1 = fiveDigitNumber.charAt(0);
    let digit2 = fiveDigitNumber.charAt(1);
    let digit3 = fiveDigitNumber.charAt(2);
    let digit4 = fiveDigitNumber.charAt(3);
    let digit5 = fiveDigitNumber.charAt(4);

    // Виведемо цифри через пробіл
    alert(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);
} else {
    alert("Будь ласка, введіть п'ятизначне число.");
}