$(function () {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code, lang) {
            return hljs.highlightAuto(code, [lang]).value;
        }
    });

    $.ajax({
        type: 'get',
        url: strUrl + '?' + (new Date()).getTime(),
        async: false,
        dataType: 'text',
        success: function (response, status, request) {
            document.body.innerHTML = marked(response);
            hljs.initHighlighting();
            $('table').addClass('table');
        }
    });
});
