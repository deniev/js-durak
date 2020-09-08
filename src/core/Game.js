import Card from "@core/Card";

class Game
{
    constructor()
    {
        /**
         * Настройки игры
         * @type {Object}
         */
        this.options = {
            cardsCount: 36
        };

        /**
         * Колода карт
         * @type {Array}
         */
        this.deck = [];

        this.initialize();
    }

    initialize()
    {
        const { cardsCount } = this.options;

        for (let i = 1; i <= cardsCount; i++) {
            this.deck.push(
                new Card()
            );
        }
    }
}

export default Game;