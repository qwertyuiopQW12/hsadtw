// تعريف مصفوفة لتخزين الحسابات
let accounts = [];

// إضافة حساب جديد
function addAccount() {
  let name = document.getElementById("accountName").value;
  let number = document.getElementById("accountNumber").value;
  let openingBalance = document.getElementById("openingBalance").value;
  let businessName = document.getElementById("businessName").value;

  if (name && number && openingBalance && businessName) {
    let account = {
      name: name,
      number: number,
      openingBalance: openingBalance,
      businessName: businessName
    };
    accounts.push(account);
    updateTable();
    clearFields();
    alert("تم إضافة الحساب بنجاح!");
  } else {
    alert("يرجى ملء جميع الحقول!");
  }
}

// تعديل حساب
function updateAccount() {
  let number = document.getElementById("accountNumber").value;

  let account = accounts.find(acc => acc.number === number);
  if (account) {
    account.name = document.getElementById("accountName").value || account.name;
    account.openingBalance = document.getElementById("openingBalance").value || account.openingBalance;
    account.businessName = document.getElementById("businessName").value || account.businessName;

    updateTable();
    clearFields();
    alert("تم تعديل الحساب بنجاح!");
  } else {
    alert("الحساب غير موجود!");
  }
}

// حذف حساب
function deleteAccount() {
  let number = document.getElementById("accountNumber").value;

  accounts = accounts.filter(acc => acc.number !== number);
  updateTable();
  clearFields();
  alert("تم حذف الحساب بنجاح!");
}

// تحديث جدول الحسابات
function updateTable() {
  let tableBody = document.getElementById("accountsTable");
  tableBody.innerHTML = "";

  accounts.forEach(account => {
    let row = `<tr>
            <td>${account.name}</td>
            <td>${account.number}</td>
            <td>${account.openingBalance}</td>
            <td>${account.businessName}</td>
        </tr>`;
    tableBody.innerHTML += row;
  });
}

// تفريغ الحقول
function clearFields() {
  document.getElementById("accountName").value = "";
  document.getElementById("accountNumber").value = "";
  document.getElementById("openingBalance").value = "";
  document.getElementById("businessName").value = "";
}