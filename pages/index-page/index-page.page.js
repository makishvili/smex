var jspath = require("jspath");
var toc = require('storymill/list');
var smCfg = require('storymill/config').get('storymill');

module.exports = function (pages) {
    pages.declare('index-page', function (params) {
        var options = params.options;

        var projectUrls = smCfg.project;
        var booksList = toc.getBookList(projectUrls);
        var publishedBooksList = jspath.apply('.{.published === "yes"}', booksList);

        return {
            block: 'page',
            title: 'Повести и рассказы - Вадим Макишвили',
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
                {url: options.assetsPath + '.css'},
                {
                    url: '/octopress/stylesheets/screen.css',
                    media: 'screen, projection'
                },
                {
                    rules : '.category {text-align: left;} .day, .month, .year {font-size: 17px; color: #aaa; display: inline;}'
                }
            ],
            scripts: [
                {url: options.assetsPath + '.js'},
                {url: '/octopress/javascripts/modernizr-2.0.js'},
                {url: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'},
                {url: '/octopress/javascripts/octopress.js'}
            ],
            body: [
                {
                    block: 'header'
                },
                {
                    block: 'nav'
                },
                {
                    block: 'books',
                    title: 'Повести и рассказы',
                    list: publishedBooksList
                },
                {
                    block: 'footer'
                }
            ]
        };
g    });
};
