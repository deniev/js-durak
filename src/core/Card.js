import { v4 as uuid } from 'uuid';

class Card
{
    constructor(options)
    {
        /**
         * Идентификатор карты
         * @type string
         */
        this.id = uuid();

        /**
         * Тип карты
         * @type string
         */
        this.type = options.type;
    }
}

export default Card;