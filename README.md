# mfp

Magnific Popup support for phpBB

Плагин добавляет поддержку [Magnific Popup для phpBB](http://dimsemenov.com/plugins/magnific-popup/). Поддерживаются полноразмерные вложения и картинки с шириной более 400px (добавляется ссылка для открытия в Magnific Popup)

## Установка:

Перед тегом `</body>` добавить 
```<script id="mfp-loader" data-path="{ROOT_PATH}" type="text/javascript" src="{ROOT_PATH}mfp/loader.min.js"></script>```
Максимальную ширину картинок по ссылкам можно ограничить с помощью CSS:
```
.postbody .content img, .postbody .signature img {
   vertical-align: bottom;
   display: inline-block;
   max-width: 400px; /* задаем максимальную ширину картинок */
   height: auto; /* сохраняем пропорции картинки */
}
```

## Licence

(The MIT Licence)

Copyright (c) 2013 Vitaliy Ralle
