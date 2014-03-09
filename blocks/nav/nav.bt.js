module.exports = function (bt) {

    bt.match('nav', function (ctx) {
        ctx.setTag('nav');
        ctx.setAttr('role', 'navigation');

        ctx.setContent(' \
            <form action="http://google.com/search" method="get">\
                <fieldset role="search">\
                    <input type="hidden" name="q" value="site:makishvili.github.io/octopress">\
                    <input class="search" type="text" name="q" results="0" placeholder="Search">\
                </fieldset>\
            </form>\
            <fieldset class="mobile-nav"><select><option value="">Navigate…</option><option value="http://makishvili.github.io/octopress">» Главная</option><option value="http://makishvili.github.io/octopress/category/presentation">» Презентации</option><option value="http://makishvili.github.io/octopress/books">» Повести</option><option value="http://makishvili.github.io/octopress/blog/archives">» Архив</option></select></fieldset><ul class="main-navigation">\
                <li><a href="/octopress">Главная</a></li>\
                <li><a href="/octopress/category/presentation">Презентации</a></li>\
                <li><a href="/octopress/books">Повести</a></li>\
                <li><a href="/octopress/blog/archives">Архив</a></li>\
        </ul>\
        ');
    });

};
