(function ($) {
    $('[data-toggle="sidebar"]').click(function (e) {
        console.log('clicked');
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
})(jQuery);
