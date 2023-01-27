import { SaluteHandler } from '@salutejs/scenario'
import { GalleryCard, GalleryItem, LeftRightCellView, ListCard, PaymentInvoice } from '@salutejs/scenario';
import * as dictionary from './system.i18n'
import { createOrderBundle } from './card'

//Хэндлер для RUN_APP
export const runAppHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('start'))
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
    res.appendBubble('Сначала определимся с количеством самогона, который нужен на выходе. В домашних условиях из 1 кг сахара получается 1,1-1,2 литра самогонки крепостью 40 градусов. Но при расчетах советую увеличивать количество ингредиентов на 10-15%, так как в силу разных причин (температуры, качества сырья, неправильной перегонки) реальный выход всегда меньше теоретического именно на эту величину.')
    res.appendSuggestions(['Второй шаг'])
}

export const SecondStepHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary);
    res.appendBubble('Под весьма сложным названием понимается приготовление обычного сахарного сиропа с лимонной кислотой. Дело в том, что во время брожения дрожжи сначала расщепляют сахар на простые моносахариды – глюкозу с фруктозой, и только потом перерабатывают эти вещества в спирт. Нагревание также убивает патогенные микроорганизмы на поверхности сахара, которые ждут более благоприятных условий для размножения (температуры и влажности). Активизация вредных микробов в браге нежелательна, поскольку может негативно отразиться на запахе.');
    res.appendSuggestions(['Третий шаг'])
    res.appendCard(createOrderBundle());
}

export const ThirdStepHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary);
    res.appendBubble('Очень важный этап, в ходе которого во многом формируется вкус готового продукта. Вода для браги должна соответствовать гигиеническим нормам, не иметь ни цвета, ни вкуса, ни запаха. Перед приготовлением сахарного самогона рекомендую 1-2 дня отстаивать водопроводную воду. Благодаря этому снижается жесткость, а вредные примеси оседают на дне. После отстаивания слейте воду с осадка через тоненькую трубочку.');
    res.appendSuggestions(['Следущий шаг'])
    res.appendCard(createOrderBundle());

}