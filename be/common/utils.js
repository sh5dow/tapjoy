const { STRING_LENGTH, OPENING_REMOVAL_CHAR, CLOSING_REMOVAL_CHAR } = require("../models");

const stringContainsPalindrom = (input) => {
    const removedBracketsString = removeStartingEndingChars(input);
    if (removedBracketsString.length <= STRING_LENGTH) {
        return false;
    }
    const step = Array.from(Array(Math.floor(STRING_LENGTH / 2)).keys());
    for (let i = 0; i < removedBracketsString.length; i++) {
        // checks boundaries
        if (i + STRING_LENGTH > removedBracketsString.length) {
            return false;
        }

        // checks 1st & last characters and repeats action till it iterates over specified length
        const same = step.every((item) => removedBracketsString[i + item] === removedBracketsString[i + (STRING_LENGTH - 1) - item]);
        if (same) {
            return true;
        }
    }

    return false;
}

/**
 * Removes characters within specified character input globally from string
 * due to regex, its expansive operation, but simplifies the process -> can be switched with
 * index checking of the string
 * @param input
 * @returns {void | string | *}
 */
const removeStartingEndingChars  = (input) => {
    const removalString = `\\${OPENING_REMOVAL_CHAR}.*\\${CLOSING_REMOVAL_CHAR}`;
    const re = new RegExp(removalString, "g");
    return input.replace(re, '');
}

const formWsResponse = (input) => {
    return input.map((item) => {
        const res = stringContainsPalindrom(item.text);
        return {
            text: res ? item.text : null,
            line: item.line,
            result: res
        };
    }).filter((item) => item.result);
}

module.exports = {
    stringContainsPalindrom,
    removeStartingEndingChars,
    formWsResponse
}
