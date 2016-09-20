$(document).ready(function(){
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.searchbox-icon').css('display','block');
            submitIcon.click();
        }
    });
});
function buttonUp(){
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.searchbox-icon').css('display','none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display','block');
    }
}




$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});






/* Weiß nicht genau für was ich das gebrauchen kann */


$(function(){
    var search2 = $('#s2');
    var icon2   = $('#search2btn');

    // handling the focus event on input2
    $(search2).on('focus', function(){
        $(this).animate({
            width: '100%'
        }, 400, function(){
            // callback function
        });
        $(icon2).animate({
            right: '10px'
        }, 400, function(){
            // callback function
        });
    });

    // handling the blur event on input2
    $(search2).on('blur', function(){
        if(search2.val() == '') {
            $(search2).animate({
                width: '45%'
            }, 400, function(){ });

            $(icon2).animate({
                right: '360px'
            }, 400, function(){ });
        }
    });

    // handling both form submissions
    $('#searchform, #searchform2').submit(function(e) {
        e.preventDefault();
    });
});