module.exports = function (bt) {

    bt.match('error', function (ctx) {
        ctx.setTag('span');

        ctx.setContent('Содержимое блока');
    });

};
