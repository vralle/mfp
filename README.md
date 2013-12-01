# mfp

Magnific Popup support for phpBB

Плагин добавляет поддержку [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)  для phpBB. Поддерживаются полноразмерные вложения и картинки с шириной более 400px (добавляется ссылка для открытия в Magnific Popup)

### Включает:

[Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) is a responsive jQuery lightbox plugin

## Установка:

Создать папку "mfp" в корне форума и скопировать в нее содержимое архива

Перед тегом `</body>` добавить:
```
<script id="mfp-loader" data-path="{ROOT_PATH}" type="text/javascript" src="{ROOT_PATH}mfp/loader.min.js"></script>
```

Максимальную ширину картинок рекомендуется ограничить с помощью CSS:
```
.postbody .content img, .postbody .signature img {
   vertical-align: bottom;
   display: inline-block;
   max-width: 400px; /* задаем максимальную ширину картинок */
   height: auto; /* сохраняем пропорции картинки */
}
```

Демо: http://forum.hw-lab.com/viewtopic.php?p=4559#p4559

## Licence

MIT Licence

Copyright (c) 2013 Vitaliy Ralle
