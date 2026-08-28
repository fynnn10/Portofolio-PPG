PORTOFOLIO REFYAN — PPG UNIVERSITAS NEGERI MALANG

STRUKTUR
- index.html      : Beranda
- profil.html     : Profil + peta UM, SMPN 18 Malang, dan Pasuruan
- artefak.html    : Pilihan Semester 1 dan Semester 2
- semester1.html  : Daftar mata kuliah Semester 1
- semester2.html  : Daftar mata kuliah Semester 2
- inovasi.html    : Placeholder inovasi
- style.css       : Seluruh tampilan dan animasi
- script.js       : Navbar, loader, reveal animation, progress bar, data rendering
- data.js         : DATA UTAMA YANG MUDAH DIEDIT
- assets/         : Foto dan logo

CARA EDIT DATA
1. Buka data.js.
2. Ubah nama, program, sekolah, asal, deskripsi, kutipan, dan daftar mata kuliah pada objek PORTFOLIO.
3. Untuk menambahkan artefak pada setiap mata kuliah, bagian renderCourses() di script.js dapat dikembangkan. Saat ini setiap kartu diberi label "Belum diisi" agar mudah diganti.
4. Untuk menambah inovasi, isi halaman inovasi.html atau tambahkan data baru di data.js.

CATATAN
- Website memakai Google Maps embed, sehingga peta membutuhkan koneksi internet.
- Font Google Fonts juga membutuhkan koneksi internet; jika offline, website tetap tampil menggunakan font fallback.
- Semua halaman memakai file CSS/JS bersama sehingga perubahan desain cukup dilakukan di satu tempat.
