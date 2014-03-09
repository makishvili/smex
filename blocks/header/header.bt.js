module.exports = function (bt) {

    bt.match('header', function (ctx) {
        ctx.setTag('header');
        ctx.setAttr('role', 'banner');

        ctx.setContent('<hgroup> <h1><a href="/octopress/">Вадим Макишвили</a></h1> <h2>Вглядываясь в смыслы</h2> </hgroup>');
    });

};
