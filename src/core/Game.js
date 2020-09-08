import Card from "@core/Card";
import config from "@/config";
import { each, forIn } from "lodash";

class Game
{
    constructor()
    {
        /**
         * Настройки игры
         * @type Object
         */
        this.options = {

        };

        /**
         * Колода карт
         * @type Array
         */
        this.deck = [];

        this.initialize();
    }

    /**
     * Метод для добавления карты в колоду
     *
     * @param card
     */
    addCard(card)
    {
        this.deck.push(new Card(card));
    }

    initialize()
    {
        each(config.data, ({ type, cards }) => {
            each(cards, path => {
                this.addCard({ type, path })
            });
        });
    }
}

export default Game;