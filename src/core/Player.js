import { v4 as uuid } from 'uuid';

class Player
{
    constructor()
    {
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
    }
}

export default Player;