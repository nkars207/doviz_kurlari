function generateCode(displayId) {
    const code = Math.floor(1000 + Math.random() * 9000); // 4 basamaklı rastgele sayı
    document.getElementById(displayId).innerText = `Doğrulama Kodu: ${code}`;
    return code;
}

let currentCode; // Doğrulama kodunu saklamak için

function validateForm() {
    const userInput = document.getElementById('verification').value;
    if (userInput != currentCode) {
        alert("Doğrulama kodu yanlış! Lütfen tekrar deneyin.");
        currentCode = generateCode('code-display'); // Yanlışsa yeni kod oluştur
        return false; // Form gönderimini engelle
    }
    return true; // Doğruysa formu gönder
}

function showForm(type) {
    // Her iki formu da gizle
    document.getElementById('individual-form').style.display = 'none';
    document.getElementById('commercial-form').style.display = 'none';

    // Seçilen tipe göre uygun formu göster
    if (type === 'individual') {
        document.getElementById('individual-form').style.display = 'block';
        currentCode = generateCode('code-display'); // Bireysel form için kod üret
    } else if (type === 'commercial') {
        document.getElementById('commercial-form').style.display = 'block';
        currentCode = generateCode('code-display-commercial'); // Ticari form için kod üret
    }
}

// Sayfa yüklendiğinde bireysel formu göster
window.onload = function() {
    showForm('individual');
};


