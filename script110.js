const tasbeehList = [
    "سبحـــان الله",
    "الـحـمـــد لله",
    "لا إله إلا الله",
    "الله أكــبر",
    "لا حول ولا قوة إلا بالله",
    "سبحـــان الله وبحمده سبحان الله العظيم",
];

let tasbeehIndex = 0;

function showNotification(message) {
    const notificationsContainer = document.getElementById("notificationsContainer");
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    notificationsContainer.appendChild(notification);

    // إزالة الإشعار بعد انتهاء الأنميشن
    setTimeout(() => {
        notification.remove();
    }, 6000);
}

// عرض تسبيحة كل 5 دقائق
setInterval(() => {
    showNotification(tasbeehList[tasbeehIndex]);

    // الانتقال إلى التسبيحة التالية
    tasbeehIndex = (tasbeehIndex + 1) % tasbeehList.length; // يعيد البداية إذا انتهت القائمة
}, 300000); // 300000 ميلي ثانية = 5 دقائق

// لإظهار أول إشعار فورًا
showNotification(tasbeehList[tasbeehIndex]);


hgfnjk