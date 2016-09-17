

function showmenu(menu) {
    document.getElementById(menu).style.display = 'block';
}

function closeAllmenu() {
    document.getElementById('submenu1').style.display = 'none';
    document.getElementById('submenu2').style.display = 'none';
    document.getElementById('submenu3').style.display = 'none';
    document.getElementById('submenu4').style.display = 'none';
}

function closeOthermenus(menu) {
    document.getElementById('submenu1').style.display = 'none';
    document.getElementById('submenu2').style.display = 'none';
    document.getElementById('submenu3').style.display = 'none';
    document.getElementById('submenu4').style.display = 'none';
    document.getElementById(menu).style.display = 'block';
}


$('.collapse').on('shown.bs.collapse', function (e) {
    $('.collapse').not(this).removeClass('in');
});

$('[data-toggle=collapse]').click(function (e) {
    $('[data-toggle=collapse]').parent('li').removeClass('active');
    $(this).parent('li').toggleClass('active');
});