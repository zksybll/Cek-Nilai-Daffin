function cekNilaiSiswa() {
    
    let Nama = document.getElementById("inputNama").value;
    
    let Nilai = Number(document.getElementById("inputNilai").value);
    if (Nilai > 100) {
        alert("Nilai tidak boleh lebih dari 100!")
        return
    }

    let Grade = "";
    let Kelulusan = "";

    if (Nilai >= 90) {
        Grade = "A";
    } else if (Nilai >= 80) {
        Grade = "B";
    } else if (Nilai >= 70) {
        Grade = "C";
    } else if (Nilai >= 60) {
        Grade = "D";
    } else {
        Grade = "E";
    }

    if (Nilai >= 70) {
        Kelulusan = "LULUS";
    } else {
        Kelulusan = "TIDAK LULUS";
    }

let daftarNilai = document.getElementById("daftarNilai");

    let dataSiswa = document.createElement("div");

    dataSiswa.classList.add("siswa");

    dataSiswa.innerHTML = `
        <h3>${Nama}</h3>
        <p>Nilai: ${Nilai}</p>
        <p>Grade: ${Grade}</p>
        <p><b>Status: ${Kelulusan}</b></p>
    `;

    daftarNilai.prepend(dataSiswa);

    document.getElementById("inputNama").value = "";
    document.getElementById("inputNilai").value = "";
}

//     document.getElementById("hasilNama").innerText = Nama;
//     document.getElementById("hasilNilai").innerText = Nilai;
//     document.getElementById("hasilGrade").innerText = Grade;
//     document.getElementById("hasilStatus").innerText = Kelulusan;
// }