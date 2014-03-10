var fs = require('fs');
var jspath = require("jspath");
var smCfg = require('storymill/config').get('storymill');

module.exports = function (pages) {
    pages.declare('book-page', function (params) {
        var options = params.options;
        var request = params.query;

        var importUrl = smCfg.project.import;
        var storyUrl = importUrl + request.id + '/' + request.id + '.sm.json';

        console.log(storyUrl);

        // Прочитать файл, получить JSON
        var story = JSON.parse(fs.readFileSync(storyUrl, 'utf8'));

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
                {url: options.assetsPath + '.css'},
                {
                    url: '/octopress/stylesheets/screen.css',
                    media: 'screen, projection'
                },
                {url: '/libs/highlight/styles/default.css'}
            ],
            scripts: [
                {url: '/octopress/javascripts/modernizr-2.0.js'},
                {url: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'},
                {url: '/octopress/javascripts/octopress.js'},
                {url: '/libs/highlight/highlight.pack.js'},
                {source: 'hljs.initHighlightingOnLoad();'}
            ],
            body: [
/*
                {
                    block: 'debug',
                    data: story
                },
*/
                {
                    block: 'story',
                    title: story.title,
                    author: story.author,
                    text: story.body
                }
            ]
        };
    });
};
