// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

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

// وظيفة إنشاء الحساب
function signup() {
  // الحصول على القيم من الحقول
  const name = document.getElementById("signupName").value.trim();
  const phone = document.getElementById("signupPhone").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const quickAccessCode = document.getElementById("quickAccessCode").value.trim();

  // التحقق من إدخال جميع الحقول
  if (!name || !phone || !password || !quickAccessCode) {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  // إنشاء مرجع المستخدم
  const userRef = ref(database, `users/${phone}`);

  // حفظ البيانات في قاعدة البيانات
  set(userRef, {
      name: name,
      phone: phone,
      password: password,
      quickAccessCode: quickAccessCode,
    })
    .then(() => {
      alert("تم إنشاء الحساب بنجاح!");
    })
    .catch((error) => {
      console.error("خطأ أثناء إنشاء الحساب:", error);
      alert("حدث خطأ أثناء إنشاء الحساب");
    });
}

// وظيفة تسجيل الدخول
function login() {
  alert("وظيفة تسجيل الدخول غير مفعّلة بعد.");
}

// وظيفة استعادة كلمة المرور
function resetPassword() {
  alert("وظيفة استعادة كلمة المرور غير مفعّلة بعد.");
}

// تصدير الوظائف
window.signup = signup;
window.login = login;
window.resetPassword = resetPassword;