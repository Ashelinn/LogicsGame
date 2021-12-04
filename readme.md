# Игра Логика / Logic game
## Правила игры 
Цель игры - угадать произвольную последовательность из четырех цветов. 
Игра начинается по нажатию на кнопку "СТАРТ". Появляется линия из 4 серых кругов и кнопка "отправить".
Игрок начинает с произвольного выбора цветов из семи возможных. Цвета указаны после 
заголовка. Смена цветов происходит по клику на круг. После выбора всех цветов в линии, надо кликнуть по кнопке "отправить".
Компьютер отвечает следующим образом: отображает белый кружок для каждого правильно угаданного цвета, и коричневый кружок для каждого правильного цвета, помещенного на свое место.
Игроку предоставляется 10 шансов, чтобы угадать последовательность. 
Игрок может сдаться. В этом случае на экран выводится загаданная последовательность, становится активной кнопка "СТАРТ".
## Rules of the game
The goal of the game is to guess an arbitrary sequence of four colors.
The game starts by pressing the "START" button. A line of 4 gray circles and a button "send" appears.
The player begins by randomly choosing colors from seven possible ones. Colors are shown after header. The color change occurs by clicking on the circle. After selecting all the colors in the line, you need to click on the "send" button. 
The computer responds as follows: it displays a white circle for each correctly guessed color, and a brown circle for each correct color placed in its place.
The player is given 10 chances to guess the sequence.
The player can surrender. In this case, the hidden sequence is displayed on the screen, the "START" button becomes active.

# Информация по разработке игры / Information on the development of the game
## Дизайн
Дизайн разработан на основе настольной игры "Логика". Ссылка на игру: [https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.modi.ru%2Fcatalog%2Fgoods%2Fnastolnaya_igra_master_logiki%2F&psig=AOvVaw0VobBk9o0Tu_TgscE_dpcv&ust=1638736312194000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMCXj87-yvQCFQAAAAAdAAAAABAK] [a]
## Design
The design is based on the board game "Logic". Link to the game: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.modi.ru%2Fcatalog%2Fgoods%2Fnastolnaya_igra_master_logiki%2F&psig=AOvVaw0VobBk9o0Tu_TgscE_dpcv&ust=1638736312194000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMCXj87-yvQCFQAAAAAdAAAAABAK
## Особенности реализации
Игра полностью основана на работе со стилями блоков. Например, при смене цветов меняется стиль блока, по которому кликаем. В стилях прописаны только различные цвета для свойства background. Сама логика игры простая - в двойном цикле подсчитывается количество совпавших цветов.

## Implementation features
The game is completely based on working with block styles. For example, when changing colors, the style of the block we click on changes. Styles only have different colors for the background property. The very logic of the game is simple - the number of matching colors is counted in a double loop.