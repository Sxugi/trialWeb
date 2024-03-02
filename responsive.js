// Menjalankan fungsi saat dokumen HTML telah sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil semua elemen dengan kelas '.header1 .gnb>li'
    var gnbItems = document.querySelectorAll('.header1 .gnb>li');

    // Iterasi melalui setiap elemen gnbItems
    gnbItems.forEach(function(item) {
        // Menambahkan event listener untuk saat mouse masuk
        item.addEventListener('mouseover', function() {
            // Mengambil submenu dari elemen yang dihover
            var submenu = this.querySelector('.sub_menu');
            // Jika submenu ada, tampilkan
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        // Menambahkan event listener untuk saat mouse keluar
        item.addEventListener('mouseout', function() {
            // Mengambil submenu dari elemen yang dihover
            var submenu = this.querySelector('.sub_menu');
            // Jika submenu ada, sembunyikan
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});

// Menjalankan fungsi saat dokumen HTML telah sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil semua elemen dengan kelas '.header1 .gnb>li'
    var gnbItems = document.querySelectorAll('.header1 .gnb>li');

    // Iterasi melalui setiap elemen gnbItems
    gnbItems.forEach(function(item) {
        // Menambahkan event listener untuk saat mouse masuk
        item.addEventListener('mouseenter', function() {
            // Menambahkan kelas 'over' pada elemen header saat mouse masuk
            document.querySelector('header').classList.add('over');
        });

        // Menambahkan event listener untuk saat mouse keluar
        item.addEventListener('mouseleave', function() {
            // Menghapus kelas 'over' pada elemen header saat mouse keluar
            document.querySelector('header').classList.remove('over');
        });
    });
});

// Menjalankan fungsi saat dokumen HTML telah sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil semua elemen dengan kelas '.hover-box'
    const hoverBoxes = document.querySelectorAll('.hover-box');

    // Iterasi melalui setiap elemen hoverBoxes
    hoverBoxes.forEach(hoverBox => {
        // Menambahkan event listener untuk saat mouse masuk
        hoverBox.addEventListener('mouseenter', () => {
            // Menambahkan kelas 'hover' pada anak pertama dari hover-box saat mouse masuk
            hoverBox.querySelector('.hover').style.opacity = '1';
        });

        // Menambahkan event listener untuk saat mouse keluar
        hoverBox.addEventListener('mouseleave', () => {
            // Menghilangkan kelas 'hover' pada anak pertama dari hover-box saat mouse keluar
            hoverBox.querySelector('.hover').style.opacity = '0';
        });
    });
});

// Menjalankan fungsi saat dokumen HTML telah sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Mengambil elemen dengan kelas '.burger-menu'
    const burgerMenu = document.querySelector('.burger-menu');
    // Mengambil elemen dengan kelas '.gnb'
    const gnb = document.querySelector('.gnb');

    // Menambahkan event listener untuk saat tombol burger menu diklik
    burgerMenu.addEventListener('click', function () {
        // Toggle kelas 'show' pada elemen dengan kelas '.gnb' saat tombol diklik
        gnb.classList.toggle('show');
    });
});
