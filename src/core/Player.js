import { v4 as uuid } from 'uuid';

class Player
{
    constructor(game)
    {
        /**
         * Объект игры
         * @type {}
         */
        this.game = game;

        /**
         * Идентификатор пользователя
         * @type {string}
         */
        this.id = uuid();

        /**
         * Текущие игровые карты пользователя
         * @type {Array}
         */
        this.cards = [];

        this.initialize();
    }

    addCard(card)
    {
        this.cards.push(card);
    }

    initialize()
    {

    }

    step()
    {

    }
}

export default Player;