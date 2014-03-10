module.exports = function (bt) {

    bt.match('debug', function (ctx) {

        var data  = ctx.getParam('data');

        ctx.setContent([
            {
                elem: 'title',
                content: 'Отладочное окно'
            },
            {
                elem: 'data',
                content: data
            }
        ]);
    });

    bt.match('debug__title', function (ctx) {
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('debug__data', function (ctx) {
        var data = JSON.stringify(ctx.getParam('content'), null, 4)
        ctx.setContent(data);
    });

};
