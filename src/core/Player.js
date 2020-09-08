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
    }
}

export default Player;