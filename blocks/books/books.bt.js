module.exports = function (bt) {

    bt.match('books', function (ctx) {
        var listTitle = ctx.getParam('title');
        var bookList = ctx.getParam('list');

        ctx.setContent([
            {
                elem: 'title',
                content: listTitle
            },
            {
                elem: 'list',
                rawList: bookList
            }
        ]);
    });

    bt.match('books__title', function (ctx) {
        ctx.setTag('h1');

        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('books__list', function (ctx) {

        var list = ctx.getParam('rawList').map(function (book) {
            return {
                elem: 'item',
                name: book.title,
                month: book.month || 'now',
                year: book.year || 'now'
            };
        });

        ctx.setContent(list);
    });

    bt.match('books__item', function (ctx) {
        ctx.setTag('article');

        ctx.setContent([
            {
                elem: 'name',
                content: ctx.getParam('name')
            },
            {
                elem: 'month',
                content: ctx.getParam('month')
            },
            {
                elem: 'year',
                content: ctx.getParam('year')
            },
        ]);
    });

    bt.match('books__name', function (ctx) {
        ctx.setTag('h1');
        ctx.setContent({
            elem: 'name-link',
            content: ctx.getParam('content')
        });
    });

    bt.match('books__name-link', function (ctx) {
        ctx.setTag('a');
        ctx.setAttr('href', '/');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match(['books__month', 'books__year'], function (ctx) {
        ctx.setTag('span');
        ctx.setContent(ctx.getParam('content'));
    });

};
