module.exports = function (bt) {

    bt.match('story', function (ctx) {

        var error = [];
        function getElem (para) {
            switch (para.tag) {
                case 'p1':
                    return 'chapter';
                    break;
                case 'p2':
                    return 'text';
                    break;
                default:
                    error.push(para.id);
                    return 'error';
                    break;
            }
        }

        var storyText = ctx.getParam('text');

        ctx.setContent([
            {
                elem: 'title',
                id: 'title',
                content: ctx.getParam('title')
            },
            {
                elem: 'author',
                id: 'author',
                content: ctx.getParam('author')
            },

            storyText.map(function(para){
                return {
                    elem: getElem(para),
                    id: 'p' + para.id,
                    content: para.text
                }
            })
        ]);
    });

    bt.match('story__title', function (ctx) {
        ctx.setTag('h1');
        ctx.setAttr('id', ctx.getParam('id'));
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('story__chapter', function (ctx) {
        ctx.setTag('h2');
        ctx.setAttr('id', ctx.getParam('id'));
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match(['story__author', 'story__text'], function (ctx) {
        ctx.setAttr('id', ctx.getParam('id'));
        ctx.setContent(ctx.getParam('content'));
    });

};
