$(document).ready(function () {
    $('#keyboard-lower-container').show();
    $('#keyboard-upper-container').hide();
    
    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').toggle();
            $('#keyboard-upper-container').toggle();
        }
    });
});

