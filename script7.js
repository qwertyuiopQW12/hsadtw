function generateReport() {
    const accountName = document.getElementById("accountName").value.trim();
    const reportType = document.getElementById("reportType").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // التحقق من المدخلات
    if (!startDate || !endDate) {
        alert("يرجى اختيار التواريخ!");
        return;
    }

    // مسح الجدول القديم
    document.getElementById("reportHeader").innerHTML = "";
    document.getElementById("reportBody").innerHTML = "";

    // إعداد البيانات الوهمية (يمكن استبدالها ببيانات حقيقية)
    const data = [
        { accountName: "حساب 1", date: "2025-01-01", type: "صرف", amount: 500, currency: "YER" },
        { accountName: "حساب 2", date: "2025-01-10", type: "قبض", amount: 300, currency: "SAR" },
        { accountName: "حساب 1", date: "2025-01-15", type: "قيد", amount: 200, currency: "USD" },
    ];

    // تصفية البيانات حسب اسم الحساب، نوع السند، والتاريخ
    const filteredData = data.filter(item => {
        return (
            (!accountName || item.accountName.includes(accountName)) &&
            (reportType === "all" || item.type === reportType) &&
            item.date >= startDate &&
            item.date <= endDate
        );
    });

    // حساب الإجماليات
    let totalYER = 0, totalSAR = 0, totalUSD = 0;
    filteredData.forEach(item => {
        if (item.currency === "YER") totalYER += item.amount;
        if (item.currency === "SAR") totalSAR += item.amount;
        if (item.currency === "USD") totalUSD += item.amount;
    });

    // تحديث مربع الإجماليات
    document.getElementById("totalYER").innerText = totalYER;
    document.getElementById("totalSAR").innerText = totalSAR;
    document.getElementById("totalUSD").innerText = totalUSD;

    // عرض التقرير التفصيلي
    document.getElementById("reportHeader").innerHTML = `
        <tr>
            <th>اسم الحساب</th>
            <th>التاريخ</th>
            <th>نوع السند</th>
            <th>المبلغ</th>
            <th>العملة</th>
        </tr>
    `;
    filteredData.forEach(item => {
        document.getElementById("reportBody").innerHTML += `
            <tr>
                <td>${item.accountName}</td>
                <td>${item.date}</td>
                <td>${item.type}</td>
                <td>${item.amount}</td>
                <td>${item.currency}</td>
            </tr>
        `;
    });
}