import Card from "@core/Card";
import config from "@/config";
import { each } from "lodash";
import { $ } from "@/utils";

class Game
{
    constructor(root)
    {
        /**
         * Настройки игры
         * @type Object
         */
        this.options = {

        };

        this.root = $(root);

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

    buildHtml()
    {

    }

    start()
    {

    }
}

export default Game;