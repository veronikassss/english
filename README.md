# English Kids — GitHub Pages build v33

Готовая версия для публикации на GitHub Pages.

Внутри уже есть всё необходимое:

- `image-assets.js` — все изображения игры;
- `audio-assets.js` — учебная английская озвучка и все сохранённые реплики Лекса;
- `background-music.mp3` — спокойная фоновая музыка;
- `app.js`, `content.js`, `styles.css`, `index.html` — сама игра.

## Музыка

Музыка запускается после первого действия ребёнка (ограничение браузеров на autoplay), играет по кругу и очень тихо. Во время английской озвучки или речи Лекса она автоматически приглушается, а потом возвращается. Кнопка `🎵 / 🔇` находится рядом с Лексом, настройка запоминается браузером.

## Публикация

Распакуйте ZIP и загрузите **все файлы из папки** в корень GitHub-репозитория. Не загружайте сам ZIP как единственный файл.

После Commit changes подождите обновления GitHub Pages и откройте сайт с `Ctrl + F5`.


## v34 fixes
- Vocabulary Garden now reveals only vocabulary whose vocab card has actually been unlocked.
- Fixed School: 3 pencils -> three pencils is the correct answer.
- Selected-world maps expand vertically so later missions remain reachable in every world.
- Get to school / Find English class positions swapped on the School map as requested.
- Added 43 missing plural audio records.
- Replaced 53 mixed Russian/English Lex recordings with corrected versions.


## v35 fixes
- persistent queued Lex autoplay with recovery after browser play rejection
- all 53 corrected mixed Russian/English Lex recordings merged
- match words play automatically when selected
- Zoo sleep gate: 5 minutes OR 3 tasks in other worlds
- sleeping Zoo scenes are visible gray but cannot be opened
- Zoo day-one completion notification waits for the Zoo Guide License
