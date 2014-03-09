module.exports = function (bt) {

    bt.match('footer', function (ctx) {
        ctx.setTag('footer');
        ctx.setAttr('role', 'contentinfo');

        ctx.setContent('<p> Copyright © 2014 - Вадим Макишвили - <span class="credit">Powered by <a href="http://octopress.org">Octopress</a></span> </p>');
    });

};
