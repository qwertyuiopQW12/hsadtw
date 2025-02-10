import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

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

// وظيفة تسجيل الدخول
function login() {
  // الحصول على القيم من الحقول
  const phone = document.getElementById("loginPhone").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  // التحقق من إدخال جميع الحقول
  if (!phone || !password) {
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

        // التحقق من كلمة المرور
        if (userData.password === password) {
          alert("تم تسجيل الدخول بنجاح!");
          // توجيه المستخدم إلى صفحة أخرى
          window.location.href = "index4.html"; // استبدل "dashboard.html" بصفحتك
        } else {
          alert("كلمة المرور غير صحيحة");
        }
      } else {
        alert("رقم الهاتف غير موجود");
      }
    })
    .catch((error) => {
      console.error("خطأ أثناء تسجيل الدخول:", error);
      alert("حدث خطأ أثناء تسجيل الدخول");
    });
}

// تصدير الوظيفة
window.login = login;





