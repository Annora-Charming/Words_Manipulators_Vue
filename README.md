***Для работы необходимо запустить сервер с репозитория - https://github.com/Annora-Charming/words.git***

## Технологии использованные в проекте

* Vue (1)
* Тесты (3) (не всё покрыто)
* Линтер (3)
* Обращение в сеть (3)

Итого - 10/16
(https://github.com/dmitryweiner/lectures/blob/main/907%D1%81%D0%B2.md)
***
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```
***
## Компоненты

### Компонент String Reverser

Введенная в поле строка будет выведена в обратном порядке. Нажатие на кнопки добавляет определнную последовательность символов к введенной строке, кнопка "ERROR" перезаписывает строку полностью, а кнопка "Clear all" - очищает поле ввода

![img.png](public/images/Reverser.png)

### Компонент Palindrome Tester

Введенная в поле строка будет проверена на палиндромичность и зеркальность по нажатию кнопки. 
> Палиндром - слово или фраза одиноково читающаяся как слева направо так и справа налево.
> 
> Зеркальный палиндром - палиндром включающий в себя определенные буквы 
> 
> (а, д, ж, и, м, н, о, п, т, ф, х, ш) 
> 
> (a, h, i, m, o, t, u, v, w, x, y)

![img.png](public/images/Palindrome.png)

### Компонент Sound Selector

Выбранные в списке элементы будут выведены после фразы "You say:". Можно выбрать несколько элементов если зажать клавишу ctrl при нажатии по элементам. Также можно добавлять элементы в список (ввести фразу в поле ввода и нажать кнопку "Add to list")

![img.png](public/images/Sound.png)

### Компонент Word Finder an Translator

После введения буквы или набора букв и нажатия кнопки "get words" в списке будут выведены (максимум 10) слова, начинающиеся с введенного набора букв. При нажатии на слово из списка будет выведен его перевод.

![img.png](public/images/Finder.png)

### Компонент Translator

После нажатия на кнопку "translate" введенная фраза будет переведена.

![img.png](public/images/Translator.png)

## Что еще можно сделать:
* Поправить css (использовать классы вместо id, исправить ошибки при изменении размера и т.д.)
* Поправить код (вынести функции, изменить названия и подписи (на кнопках) на более корректные, добавить валидацию ("проверку на дурака"))
* Дописать тесты
* Добавить VueX
* Перевести ReadMe
* Выложить на Хироку
