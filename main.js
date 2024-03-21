const gambar = document.getElementById("gambar");
const penjelasan = document.getElementById("penjelasan");
const ubahGambarBtn = document.getElementById("ubahGambarBtn");

// Daftar gambar yang akan digunakan
const daftarGambar = [
    { src: "aekvbs.jpg", alt: "Gambar 1", penjelasan: "Mengunjungi distrik perbelanjaan Akihabara menghadirkan keasyikan tersendiri bagi para pencinta game dan anime. Pasalnya, distrik ini dipenuhi dengan toko yang menjual berbagai merchandise anime, manga, game, dan gadget." },
    { src: "aekjbsrj.jpg", alt: "Gambar 2", penjelasan: "Tokyo Tower tidak hanya berbicara tentang ketinggian, tetapi juga simbol kebangkitan orang-orang Jepang setelah perang. Sejak dibangun pada 1958 setelah Perang Dunia II usai, Tokyo Tower menjadi landmark paling ikonik di Jepang." },
    { src: "jheblvdsjkw.jpg", alt: "Gambar 3", penjelasan: "Biei Blue Pond adalah fenomena alam yang menarik di Hokkaido, dengan warna airnya yang unik, perpaduan menakjubkan antara biru dan hijau yang berubah sesuai dengan cuaca dan musim. Warna unik ini disebabkan oleh kandungan mineral dalam air kolam, dan semakin indah lagi karena kolamnya dikelilingi oleh hutan pinus yang membuat pemandangan di sini semakin indah." }
];

// Fungsi untuk mengubah gambar dan penjelasannya
function ubahGambar() {
    const randomIndex = Math.floor(Math.random() * daftarGambar.length);
    const randomImage = daftarGambar[randomIndex];
    gambar.src = randomImage.src;
    gambar.alt = randomImage.alt;
    penjelasan.textContent = randomImage.penjelasan;
}

// Tambahkan event listener untuk tombol "Ubah Gambar"
ubahGambarBtn.addEventListener("click", ubahGambar);
