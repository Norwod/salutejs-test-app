import { SaluteHandler } from '@salutejs/scenario'
import * as dictionary from './system.i18n'

//Хэндлер для RUN_APP
export const runAppHandler: SaluteHandler = ({ res, req }) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('start'))
    res.appendSuggestions(['Первый', 'Хватит'])
}

//Хэндлер для NoMatch
export const noMatchHandler: SaluteHandler = ({ res , req}) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('nomatch'))
    res.appendSuggestions(['Первый', 'Хватит'])
    }

    //Хэндлер для Помощь
export const HelpHandler: SaluteHandler = ({res, req}) => {
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('help'))
    res.appendSuggestions(['Хватит'])
}

export const FirstStateHandler: SaluteHandler = ({res, req}) => {
    const keyset = req.i18n(dictionary);
    res.appendBubble(keyset('first'));
    res.appendSuggestions(['Второй'])
}

export const SecondStateHandler: SaluteHandler = ({res, req}) => {
    const keyset = req.i18n(dictionary);
    res.appendBubble(keyset('second'));
    res.appendSuggestions(['Второй'])
}