$('.shift-menu').click(function() {
    $('[data-toggle="wy-nav-shift"]').toggleClass('shift');
});

$(document).one("click", ".language-picker", function(e) {
    $.get(gitbook.state.bookRoot +"index.html", function(data) {
        var list = data.match(/<ul class=\"languages\">([\s\S]+?)<\/ul>/);
        if (list) {
            var CurAddr = location.href.substr(gitbook.state.root.length);
            var sharp = CurAddr.indexOf("#");
            var CurAddrNoAnchor = (sharp == -1)? CurAddr : CurAddr.substr(0, sharp);

            list[1].replace(/<a href=\"([^\/]+)[^>]+>(.+?)<\/a>/g, function(a, languageCode, languageName) {
                var href = gitbook.state.bookRoot.replace(/([^\/])$/, "$1/") + languageCode +"/"+ CurAddrNoAnchor;
                $('.language-dropdown').append('<li><a href="' + href + '">' + languageName + '</a></li>');
            });
        }
    }, "html");
});

$('.language-picker').click(function(){
    $('.language-dropdown').toggle();
});
