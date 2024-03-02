// Menambahkan event listener untuk saat dokumen HTML telah sepenuhnya dimuat
window.onload = function() {
    // Memilih semua elemen navigasi di dalam header
    var navItems = document.querySelectorAll('.header .nav>li');
    // Menetapkan event listener untuk setiap item navigasi saat mouse masuk ke atasnya
    navItems.forEach(function(item) {
        item.onmouseover = function() {
            var submenu = this.querySelector('.sub_menu');
            // Jika submenu ada, tampilkan
            if (submenu) {
                submenu.style.display = 'block';
            }
        };
        // Menetapkan event listener untuk setiap item navigasi saat mouse keluar dari atasnya
        item.onmouseout = function() {
            var submenu = this.querySelector('.sub_menu');
            // Jika submenu ada, sembunyikan
            if (submenu) {
                submenu.style.display = 'none';
            }
        };
    });
    // Menetapkan event listener untuk setiap item navigasi saat mouse masuk ke atasnya
    navItems.forEach(function(item) {
        item.onmouseenter = function() {
            // Menambahkan kelas 'over' pada elemen header saat mouse masuk ke atas item navigasi
            document.querySelector('header').classList.add('over');
        };
        // Menetapkan event listener untuk setiap item navigasi saat mouse keluar dari atasnya
        item.onmouseleave = function() {
            // Menghapus kelas 'over' dari elemen header saat mouse keluar dari atas item navigasi
            document.querySelector('header').classList.remove('over');
        };
    });
    // Memilih semua elemen dengan kelas 'hover-box'
    const hoverBoxes = document.querySelectorAll('.hover-box');
    // Menetapkan event listener untuk setiap elemen 'hover-box' saat mouse masuk ke atasnya
    hoverBoxes.forEach(hoverBox => {
        hoverBox.onmouseenter = function() {
            // Menampilkan elemen turunan dengan kelas 'hover' saat mouse masuk ke atas 'hover-box'
            hoverBox.querySelector('.hover').style.opacity = '1';
        };
        // Menetapkan event listener untuk setiap elemen 'hover-box' saat mouse keluar dari atasnya
        hoverBox.onmouseleave = function() {
            // Menyembunyikan elemen turunan dengan kelas 'hover' saat mouse keluar dari atas 'hover-box'
            hoverBox.querySelector('.hover').style.opacity = '0';
        };
    });
    // Memilih elemen dengan kelas 'burger-menu'
    const burgerMenu = document.querySelector('.burger-menu');
    // Memilih elemen navigasi dengan kelas 'nav'
    const nav = document.querySelector('.nav');
    // Menetapkan event listener pada ikon 'burger-menu' untuk mengganti status tampilan navigasi
    burgerMenu.onclick = function() {
        nav.classList.toggle('show');
    };
};