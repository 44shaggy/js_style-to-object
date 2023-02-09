'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayFromString = sourceString
    .split(';')
    .filter(item => item.trim() !== '')
    .map(item => {
      const [key, value] = item.split(':');

      return [key.trim(), value.trim()];
    })

  return Object.fromEntries(arrayFromString);
}

module.exports = convertToObject;
