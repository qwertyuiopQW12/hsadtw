

// تحديد الصوت
const clickSound = new Audio('click-sound.mp3');

// إضافة حدث لجميع الأزرار
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        clickSound.play();
    });
});