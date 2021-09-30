let game = {
    width: 500,
    height: 850,
    ctx: undefined,
    agree: undefined,
    sprites: {
        board: undefined,
        violet: undefined,
        pink: undefined,
        orange: undefined,
        blue: undefined,
        green: undefined,
        red: undefined,
        smal_braun: undefined,
        smal_white: undefined,
        agree: undefined
    },
    
    //Инициализация
    init: function() {
        let canvas = document.getElementById("mycanvas");
        this.ctx = canvas.getContext("2d");
    },
    
    //загружаем картинки
    load: function() {
        for (let key in this.sprites) {
            this.sprites[key] = new Image();
            this.sprites[key].src = "img/"+key+".png";
        }
    },

    //функция начала игры
    start: function() {
        this.init();
        this.load();
        this.run();
    },

    //отрисовка спрайтов
    render: function() {
        //очищаем предыдущий кадр
        this.ctx.clearRect(0, 0, this.width, this.height);

        //рисуем новый кадр
        this.ctx.drawImage(this.sprites.board, 0, 0, 458, 843);

        this.ctx.drawImage(this.sprites.violet, 204, 690, 42, 42);

        this.ctx.drawImage(this.sprites.pink, 254, 690, 42, 42);

        this.ctx.drawImage(this.sprites.blue, 304, 690, 42, 42);

        this.ctx.drawImage(this.sprites.orange, 354, 690, 42, 42);

        this.ctx.drawImage(this.sprites.agree, 176, 780, 247, 41);
    },

    run: function(){
        this.render();
        //выводим картинки на экран
        window.requestAnimationFrame(function(){
            game.run();
        });
    },
};

//логика работы цветной фишки
    
//логика работы кнопки Подтвердить
    game.agree = {
        
    };

// запуск после загрузки страницы
window.addEventListener('load', function(){
    game.start();
});