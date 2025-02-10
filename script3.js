// إعداد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, get, child, update } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCCEvGjvP8gw12mFYnxV_XPOHhM_zHJB_U",
  authDomain: "migad-9aa39.firebaseapp.com",
  databaseURL: "https://migad-9aa39-default-rtdb.firebaseio.com/",
  projectId: "migad-9aa39",
  storageBucket: "migad-9aa39.appspot.com",
  messagingSenderId: "82386152423",
  appId: "1:82386152423:web:fb466405bbc8c12d2beb42",
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// وظيفة استعادة كلمة المرور
function resetPassword() {
  const phone = document.getElementById("resetPhone").value.trim();
  const resetCode = document.getElementById("resetCode").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();

  // التحقق من الحقول الفارغة
  if (!phone || !resetCode || !newPassword) {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  // مرجع قاعدة البيانات
  const dbRef = ref(database);

  // التحقق من وجود المستخدم
  get(child(dbRef, `users/${phone}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();

        // التحقق من رمز الوصول السريع
        if (userData.quickAccessCode === resetCode) {
          // تحديث كلمة المرور في قاعدة البيانات
          update(ref(database, `users/${phone}`), { password: newPassword })
            .then(() => {
              alert("تم تغيير كلمة المرور بنجاح!");
              window.location.href = "index.html"; // إعادة التوجيه إلى صفحة تسجيل الدخول
            })
            .catch((error) => {
              console.error("خطأ أثناء تغيير كلمة المرور:", error);
              alert("حدث خطأ أثناء تغيير كلمة المرور");
            });
        } else {
          alert("رمز الوصول السريع غير صحيح");
        }
      } else {
        alert("رقم الهاتف غير موجود في قاعدة البيانات");
      }
    })
    .catch((error) => {
      console.error("خطأ أثناء التحقق من البيانات:", error);
      alert("حدث خطأ أثناء التحقق من البيانات");
    });
}

// ربط الوظيفة بـ DOM
window.resetPassword = resetPassword;