import { SaluteHandler } from '@salutejs/scenario'
import { GalleryCard, GalleryItem, LeftRightCellView, ListCard, PaymentInvoice } from '@salutejs/scenario';
import * as dictionary from './system.i18n'
import {createOrderBundle} from './card'

//Хэндлер для RUN_APP
export const runAppHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('start'))
    res.appendCard({
        type: 'list_card',
        paddings: {
            top: '9x',
            bottom: '12x',
            left: '8x',
            right: '8x',
        },
        cells: [
            {
                type: 'text_cell_view',
                content: {
                    text: 'Корзина',
                    typeface: 'headline3',
                    text_color: 'default',
                },
                paddings: {
                    bottom: '2x',
                },
            },
            {
                type: 'left_right_cell_view',
                paddings: {
                    top: '10x',
                },
                left: {
                    type: 'simple_left_view',
                    texts: {
                        title: {
                            text: 'Итого',
                            typeface: 'footnote1',
                            text_color: 'secondary',
                        },
                    },
                },
                right: {
                    type: 'detail_right_view',
                    detail: {
                        text: `Text`,
                        typeface: 'footnote2',
                        text_color: 'default',
                        max_lines: 0,
                    },
                },
            },
        ],
    });
    res.appendSuggestions(['Рецепт', 'Хватит'])
}

//Хэндлер для NoMatch
export const noMatchHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('nomatch'))
    res.appendSuggestions(['Первый', 'Хватит'])
}

//Хэндлер для Помощь
export const HelpHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('help'))
    res.appendSuggestions(['Хватит'])
}

export const FirstStateHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary);
    res.appendBubble(keyset('first'));
    res.appendSuggestions(['Второй'])
}

export const SecondStateHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary);
    res.appendBubble('Второй экран');
    res.appendSuggestions(['Второй'])
}

export const ReceiptStateHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary);
    res.appendBubble('Рецепт приотовления самогона');
    res.appendSuggestions(['Следущий шаг'])
    res.
}

export const SecondStepHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary);
    res.appendBubble('Рецепт приотовления самогона');
    res.appendSuggestions(['Следущий шаг'])
    res.appendCard(createOrderBundle());
    
}