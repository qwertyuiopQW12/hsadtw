let voucherType = "صرف";

function toggleVoucherType() {
  voucherType = voucherType === "صرف" ? "قبض" : "صرف";
  document.getElementById("voucherType").innerText = `سند ${voucherType}`;
}

function addVoucher() {
  alert("تم إضافة السند!");
}

function updateVoucher() {
  alert("تم تحديث السند!");
}

function deleteVoucher() {
  let confirmation = confirm("هل أنت متأكد من حذف السند؟");
  if (confirmation) {
    alert("تم حذف السند!");
  }
}

function showReports() {
  alert("عرض التقارير!");
}

function printVoucher() {
  alert("لا يمكن الطباعة حالياً. يرجى التواصلمعي على +967737311305 ليتم تزويدك بلبرنامج المدفوع .");
}

function logout() {
  alert("تم تسجيل الخروج!");
  window.location.href = "index4.html"; // قم بتغيير المسار حسب الحاجة
}