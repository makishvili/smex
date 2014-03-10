exports['b-debug'] = function () {

    return {
        block: 'b-debug',
        js: true,
//        mods: {data: 'hidden'},
        content: [
            {
                elem: 'title',
                content: 'Отладочное окно'
            },
            {
                elem: 'text',
                content: 'Включено на dev машинах по умолчанию. По запросу <b>?debug=1</b> доступно в тестинге'
            },
            PROJECT.debug.map(function (d) {
                return [
                    {
                        elem: 'item',
                        mods: {folded: 'yes'},
                        content: [
                            {
                                elem: 'name',
                                content: d.name
                            },
                            {
                                elem: 'data',
                                content: JSON.stringify(d.data, null, 4)
                            }
                        ]
                    }

                ];
            })
        ]
    };
};
