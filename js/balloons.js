let animations = ["animate__heartBeat","animate__jello","animate__wobble","animate__flash","animate__bounce","animate__pulse"];

function setAttention() {
    let rand = Math.floor(Math.random() * 7);
    $("h1").addClass(animations[rand]);
}

function anyChecked() {
    let checked = false;
    $('.form-check-input').each(function () {
        if ($(this).prop('checked')) {
            checked = true
        }
    });
    return checked;
}

$(function(){
    setAttention();
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible');
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $("button#submit").on('click', function () {
        if (!anyChecked()) {
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });

    $("button#checkAll").on('click', function () {
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown')
        });
    });

    $("button#unCheckAll").on('click', function () {
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp')
        });
    });

    $(".form-check-label").mouseover(function() {
        $("h1").css("color", `${$(this).attr("for")}`);
    }).mouseout(function() {
        $("h1").css("color", "slategray");
    });
});
