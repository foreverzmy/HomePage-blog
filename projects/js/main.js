$('.thumbnail>img').css('height', $('.thumbnail').width() * 0.7);
$('.shadow').css({
    'width': $('.thumbnail').width(),
    'height': $('.thumbnail').height(),
})
$('.thumbnail').on('mouseenter', function() {
    var opacity = 0;
    $('.thumbnail').children('div').css('opacity', opacity);
    var shadow = $(this);

    function show() {
        shadow.children('div').css('opacity', opacity);
        opacity += 0.03;
        if (opacity < 1) {
            window.requestAnimationFrame(show);
        }
    }
    show();
}).on('mouseleave', function() {
    var opacity = 1;
    var shadow = $(this);

    function hide() {
        shadow.children('div').css('opacity', opacity);
        opacity -= 0.08;
        if (opacity >= -0.2) {
            window.requestAnimationFrame(hide);
        }
    }
    hide();
})
