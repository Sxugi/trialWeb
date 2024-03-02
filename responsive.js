document.addEventListener("DOMContentLoaded", function() {
    var gnbItems = document.querySelectorAll('.header1 .gnb>li');

    gnbItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            var submenu = this.querySelector('.sub_menu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', function() {
            var submenu = this.querySelector('.sub_menu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var gnbItems = document.querySelectorAll('.header1 .gnb>li');

    gnbItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            document.querySelector('header').classList.add('over');
        });

        item.addEventListener('mouseleave', function() {
            document.querySelector('header').classList.remove('over');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua elemen dengan kelas 'hover-box'
    const hoverBoxes = document.querySelectorAll('.hover-box');

    // Iterasi melalui setiap elemen hover-box
    hoverBoxes.forEach(hoverBox => {
        // Tambahkan event listener untuk saat mouse masuk
        hoverBox.addEventListener('mouseenter', () => {
            // Saat mouse masuk, tambahkan kelas 'hover' pada anak pertama dari hover-box
            hoverBox.querySelector('.hover').style.opacity = '1';
        });

        // Tambahkan event listener untuk saat mouse keluar
        hoverBox.addEventListener('mouseleave', () => {
            // Saat mouse keluar, hilangkan kelas 'hover' pada anak pertama dari hover-box
            hoverBox.querySelector('.hover').style.opacity = '0';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const gnb = document.querySelector('.gnb');

    burgerMenu.addEventListener('click', function () {
        gnb.classList.toggle('show');
    });
});
