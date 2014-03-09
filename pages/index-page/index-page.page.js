var jspath = require("jspath");
var toc = require('storymill/list');
var smCfg = require('storymill/config').get('storymill');

module.exports = function (pages) {
    pages.declare('index-page', function (params) {

        var projectUrls = smCfg.project;
        var booksList = toc.getBookList(projectUrls);

/*
        var booksList = [
            {"id": "childhood", "title": "Последний вечер детства", "completed": "yes", "published": "no"},
            {"id": "cold", "title": "Холодно", "completed": "yes", "published": "yes"},
            {"id": "crocodile", "title": "Крокодил", "completed": "no", "published": "no"},
            {"id": "cry", "title": "Время, когда плакать можно", "completed": "yes", "published": "yes"},
            {"id": "dog", "title": "Убей собаку!", "completed": "yes", "published": "yes"},
            null,
            {"id": "in-the-car", "title": "Ребенок в машине", "completed": "no", "published": "no"},
            {"id": "kush", "title": "Сандалики на тонком ремешке", "completed": "yes", "published": "yes"},
            {"id": "lift", "title": "Лифт", "completed": "no", "published": "no"},
            null,
            {"id": "mall", "title": "Стрельба в Европейском", "completed": "no", "published": "no"},
            {"id": "signs", "title": "Знаки", "completed": "yes", "published": "yes"},
            {"id": "water", "title": "Достать воды", "completed": "no", "published": "no"}
        ];
*/

        var publishedBooksList = jspath.apply('.{.published === "yes"}', booksList);

        var options = params.options;
        return {
            block: 'page',
            title: 'Index page',
            styles: [
                {url: options.assetsPath + '.css'}
            ],
            scripts: [
                {url: options.assetsPath + '.js'}
            ],
            body: [
                {
                    block: 'books',
                    title: 'Повести и рассказы',
                    list: publishedBooksList
                }
            ]
        };
    });
};
