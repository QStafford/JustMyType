$(document).ready(function () {
    $('#keyboard-lower-container').show();
    $('#keyboard-upper-container').hide();

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        }
    });
   $(document).keypress(function (e){
        if (e.keyCode == 113) {
            $("#113").css("background-color", "yellow")
        }
    })
     
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    $("#sentence").text(sentences[0])
});

