// دالة لإظهار التنبيه
function showAlert(alert) {
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');

  alertMessage.textContent = alert; // وضع النص داخل التنبيه
  alertBox.classList.remove('hidden'); // إظهار التنبيه
}

// دالة لإغلاق التنبيه
function closeAlert() {
  const alertBox = alert.getElementById('custom-alert');
  alertBox.classList.add('hidden'); // إخفاء التنبيه
}

// مثال للاستخدام
showAlert("تم الإضافة بنجاح!");