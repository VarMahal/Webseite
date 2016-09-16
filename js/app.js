

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
    Array([4]['submenu1', 'submenu2', 'submenu3', 'submenu4'])
    for(var i = 0; i < 4; i++) {
        if(Array[i] != menu)
        {
            document.getElementById(Array[i]).style.display = 'none';
            window.alert("hi");
        }

    }
}