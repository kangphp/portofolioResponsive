// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    // Menghentikan pengiriman formulir
    event.preventDefault();

    // Mengambil nilai input
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const subyek = document.getElementById("subyek").value;
    const pesan = document.getElementById("pesan").value;

    // Validasi input
    if (nama.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Isi Nama Terlebih Dahulu.",
      });
      return;
    }

    if (email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Isi E-Mail Terlebih Dahulu.",
      });
      return;
    }

    // Validasi format email menggunakan ekspresi reguler sederhana
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "E-Mail Tidak Valid",
      });
      return;
    }

    if (subyek.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Isi Subjek Terlebih Dahulu.",
      });
      return;
    }

    if (pesan.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Isi Pesan Terlebih Dahulu.",
      });
      return;
    }

    // Jika semua validasi berhasil, Anda dapat mengirim formulir di sini
    alert("Formulir telah dikirim!");
    form.reset(); // Untuk mengosongkan formulir setelah pengiriman
  });
});

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("show-menu");
}
