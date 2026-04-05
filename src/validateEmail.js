'use strict';

/**
 * @param {string} email
 *
 * @returns {boolean}
 */
function validateEmail(email) {
  const validEmailMask = /^[\w-]+(?:\.[\w-]+)*@[\w-]+(?:\.[\w-]+)+$/i;

  return validEmailMask.test(email);
}

module.exports = validateEmail;
