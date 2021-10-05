//Функция генерации последовательности цветов
function createColor() {
    let allcolors = ['blue', 'green', 'orange', 'pink', 'red', 'violet', 'yellow'];

    let hiddenColor = [];

    for (let i=0; i<4; i++) {
        let index = Math.floor(Math.random()*allcolors.length);
        hiddenColor[i]  = allcolors[index];
        allcolors.splice(index,1);
    }

    return hiddenColor;
}

//Функция старта игры
function startGame() {
    //очистить поле для новой игры
    let allTags = document.querySelectorAll('.red, .orange, .yellow, .green, .blue, .violet, .pink');
        allTags.forEach(element => {
            element.remove();
        });
    let allButtons = document.querySelectorAll('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten');
        allButtons.forEach(element => {
            element.remove();
        });

    //Генерируем последовательность цветов            
    window.colors = {
        mass: createColor()
    };

    //Выводим на первую линию произвольные цвета
    let line = createColor();
    console.log('1- '+line);
    console.log('zagadano: '+colors.mass);
    let tag = document.getElementById('line-one');

    for (let i=3; i>=0; i--) {
       tag.insertAdjacentHTML('afterbegin',`<button class="${line[i]}"> </button>`);
    }

    //добавляем кнопку подтверждения
    let button_one = document.getElementById('button-one');
    button_one.insertAdjacentHTML('afterbegin',`<button id="one" class="done"> Отправить </button>`);
    
    //скрыть кнопку старт
    document.getElementById('start').setAttribute("disabled", "disabled");


    //Нажатие на кнопку Отправить
    let bdone = document.getElementById('one');
    bdone.addEventListener('click', Done(line));
}

//Конец игры (кнопка сдаться)
function stopGame() {
    //Выводим загаданные цвета
    let tag = document.getElementById('hidden-colors');

    for (let i=3; i>=0; i--) {
       tag.insertAdjacentHTML('afterbegin',`<button class="${colors.mass[i]}"> </button>`);
    }
    
    //открыть кнопку старт
    document.getElementById('start').removeAttribute("disabled");
}

//Функция проверки правильности отгадываемой последоватеьности
function Done(mas) {
    //все кнопки линии становятся неактивными
    let tags = document.querySelectorAll(`#line-one > button`);
        tags.forEach(element => {
            element.setAttribute("disabled", "disabled");
        });

    let button = document.querySelector(`#button-one > button`);
        button.setAttribute("disabled", "disabled");
        
    //Определяем сколько цветов угадано и сколько их на своих местах
        let rightColors = 0;
        let rightPlace = 0;

        for (let i=0; i<4; i++) {
            for (let j=0; j<4; j++) {
                if (mas[i] == colors.mass[j]) {
                    rightColors++;
                    if (i == j) {
                        rightPlace++;
                    }
                }
            }
        }
        //console.log('rightColors: '+rightColors);
        //console.log('rightPlace: '+rightPlace);
    
    // Выводим на экран подсказку для игрока
}

//Старт игры: кнопка СТАРТ
let bstart = document.getElementById('start');
bstart.addEventListener('click', startGame);

//Конец игры (кнопка Сдаться)
let bstop = document.getElementById('stop');
bstop.addEventListener('click', stopGame);