
// عرض أو إخفاء القائمة الرئيسية
function toggleMenu(menuId) {
const menu = document.getElementById(menuId);
if (menu) {
menu.classList.toggle("hidden");
}
}

// عرض أو إخفاء القوائم الفرعية
function toggleSubMenu(subMenuId) {
const submenu = document.getElementById(subMenuId);
if (submenu) {
submenu.classList.toggle("hidden");
}
}

// عرض نافذة "حول التطبيق"
function showAboutApp() {
const modal = document.getElementById("aboutAppModal");
if (modal) {
modal.classList.remove("hidden");
}
}

// إغلاق نافذة "حول التطبيق"
function closeModal() {
const modal = document.getElementById("aboutAppModal");
if (modal) {
modal.classList.add("hidden");
}
}
