Страница со всеми книгами
=========================

1. Прочитать конфиг, найти все объекты с `published: true`

2. Построить массив с названиями книг

3. Передать его в `index-page.page.js`


Страница с одной книгой
=======================

1. Прочитать `get-request`, получить `id` книги `/book?id=name`

2. Прочитать конфиг, найти там объект с `id: name`

3. Сформировать путь к json: `/Users/makishvili/Yandex.Disk/StoryMill/sm-import/ + id + .json`

4. Передать его в `book-page.page.js`

5. Из `data` построить `btjson` страницы



`make bookjson`
===============
1. Прочитать конфиг, найти все объекты с `published: true`

2. Сформировать пути к плохому html каждой книги: `/Users/makishvili/Yandex.Disk/StoryMill/sm-export/ + id + .html`

3. Прочитать файл, отдать в тул, который сгеренит по этому html хороший json, сохранить его в json-файл

`make bookpdf`
==============

1. Прочитать конфиг, найти все объекты с `published: true`

2. Сформировать пути к json каждой книги: `/Users/makishvili/Yandex.Disk/StoryMill/sm-import/ + id + .json`

3. Прочитать файл, отдать в тул, который сгеренит pdf по этому json.

4. Сохранить в файл

`make bookfb2`
==============

1. сэмулировать запрос из браузера

2. Прочитать конфиг, найти все объекты с `published: true`

3. Сформировать пути к json каждой книги: `/Users/makishvili/Yandex.Disk/StoryMill/sm-import/ + id + .json`

