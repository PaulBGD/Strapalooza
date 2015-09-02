(function ($) {
    $('[data-toggle="sidebar"]').click(function (e) {
        var target = $(this).toggleClass('in').attr('data-target');
        var match = $(target);
        if (match.length > 0) {
            match.toggleClass('in');
        }
        e.preventDefault();
        return false;
    });

    $(document).click(function (e) {
        var target = $(e.target);
        if (!target.is('.nav-sidebar') && !target.parents().is('.nav-sidebar')) {
            var id = '#' + $('.nav-sidebar.in').toggleClass('in').attr('id');
            $('.in[data-target="' + id + '"]').toggleClass('in');
        }
    });

    var $div;

    $(document).on('mousedown', function (event) {
        var target = $(event.target);
        if (target.parent().hasClass('btn-ripple')) {
            target = target.parent();
        }
        if (target.hasClass('btn-ripple')) {
            if ($div) {
                $div.remove();
            }

            $div = $('<div/>');
            var btnOffset = target.offset();
            var xPos = event.pageX - btnOffset.left;
            var yPos = event.pageY - btnOffset.top;

            $div.addClass('ripple-effect');
            var $ripple = $(".ripple-effect");

            $ripple.css("height", 4);
            $ripple.css("width", 4);
            $div.css({
                top: yPos - 2.5,
                left: xPos - 2.5,
                background: target.hasClass('btn-link') ? '#222222' : '#ffffff'
            }).appendTo(target);
        }
    });

    $(document).on('mouseup', function () {
        if ($div) {
            $div.addClass('removed');
        }
    });
})(jQuery);
