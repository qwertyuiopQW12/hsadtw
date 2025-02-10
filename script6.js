let entries = []; // تخزين العمليات
let totalAmount = 0;

function addEntry() {
  const fromAccount = document.getElementById("fromAccount").value;
  const toAccount = document.getElementById("toAccount").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const currency = document.getElementById("currency").value;
  const notes = document.getElementById("notes").value;

  if (!fromAccount || !toAccount || !amount || amount <= 0) {
    alert("يرجى ملء الحقول بشكل صحيح!");
    return;
  }

  const entry = {
    fromAccount,
    toAccount,
    amount,
    currency,
    notes,
    date: new Date().toLocaleDateString()
  };

  entries.push(entry);
  totalAmount += amount;
  updateReport();
  clearFields();
  alert("تمت إضافة السند بنجاح!");
}

function updateEntry() {
  alert("ميزة التحديث قيد التطوير.");
}

function deleteEntry() {
  alert("ميزة الحذف قيد التطوير.");
}

function searchEntries() {
  alert("ميزة البحث قيد التطوير.");
}

function printReport() {
  alert("لا يمكن الطباعة حالياً. يرجى التواصلمعي على +967737311305 ليتم تزويدك بلبرنامج المدفوع");
}

function exitPage() {
  window.location.href = "index4.html"; // الانتقال لصفحة أخرى
}

function updateReport() {
  const reportBody = document.getElementById("reportBody");
  reportBody.innerHTML = ""; // مسح البيانات القديمة

  entries.forEach(entry => {
    const row = `
            <tr>
                <td>${entry.fromAccount}</td>
                <td>${entry.toAccount}</td>
                <td>${entry.amount}</td>
                <td>${entry.currency}</td>
                <td>${entry.notes}</td>
                <td>${entry.date}</td>
            </tr>
        `;
    reportBody.innerHTML += row;
  });

  document.getElementById("totalAmount").innerText = totalAmount;
}

function clearFields() {
  document.getElementById("fromAccount").value = "";
  document.getElementById("toAccount").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("currency").value = "ريال يمني";
  document.getElementById("notes").value = "";
}