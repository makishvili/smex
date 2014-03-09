module.exports = function (pages) {
    pages.declare('book-page', function (params) {
        var options = params.options;
        return {
            block: 'page',
            title: 'Книга',
            meta: [
                // http://t.co/dKP3o1e
                {
                    name: 'HandheldFriendly',
                    content: 'True'
                },
                {
                    name: 'MobileOptimized',
                    content: '320'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width,minimum-scale=1,maximum-scale=1'
                }
            ],
            styles: [
                {
                    url: '/octopress/stylesheets/screen.css',
                    media: 'screen, projection'
                }
            ],
            scripts: [
                {url: '/octopress/javascripts/modernizr-2.0.js'},
                {url: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'},
                {url: '/octopress/javascripts/octopress.js'}
            ],
            body: [
                // здесь ваши блоки
            ]
        };
    });
};
