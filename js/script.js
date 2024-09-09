function hitung() {
    // Ambil nilai alas dan tinggi
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;

    // Pastikan alas dan tinggi bukan kosong
    if(alas && tinggi) {
        // Rumus luas segitiga = 1/2 * alas * tinggi
        var hasil = 0.5 * alas * tinggi;

        // Tampilkan hasil
        document.getElementById("hasil").value = hasil;
    } else {
        alert("Mohon isi nilai alas dan tinggi");
    }
}

function hitungKeliling() {
    var sisiA = document.getElementById("sisiA").value;
    var sisiB = document.getElementById("sisiB").value;
    var sisiC = document.getElementById("sisiC").value;

    if (sisiA && sisiB && sisiC) {
        var hasilKeliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
        document.getElementById("hasil-keliling").value = hasilKeliling;
    } else {
        alert("Mohon isi semua nilai sisi");
    }
}
