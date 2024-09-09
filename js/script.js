function hitung() {
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;

    if(alas && tinggi) {
        var hasil = 0.5 * alas * tinggi;
        document.getElementById("hasil").value = hasil;
    } else {
        alert("Input masih kosong!!!");
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
        alert("Input Masih kosong!!!");
    }
}
