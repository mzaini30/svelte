/**
 * AES JSON formatter for CryptoJS
 * @link https://github.com/brainfoolong/cryptojs-aes-php
 * @version 2.2.0
 */

var CryptoJSAesJson = {
  /**
   * Encrypt any value
   * @param {*} value
   * @param {string} password
   * @return {string}
   */
  'encrypt': function (value, password) {
    if (password.match(/[^\x00-\x7F]/)) {
      console.warn('CryptoJSAES: Your passphrase contains non ASCII characters - This is not supported. Hash your passphrase with MD5 or similar hashes to prevent those issues')
    }
    return CryptoJS.AES.encrypt(JSON.stringify(value), password, { format: CryptoJSAesJson }).toString()
  },
  /**
   * Decrypt a previously encrypted value
   * @param {string} jsonStr
   * @param {string} password
   * @return {*}
   */
  'decrypt': function (jsonStr, password) {
    if (password.match(/[^\x00-\x7F]/)) {
      console.warn('CryptoJSAES: Your passphrase contains non ASCII characters - This is not supported. Hash your passphrase with MD5 or similar hashes to prevent those issues')
    }
    return JSON.parse(CryptoJS.AES.decrypt(jsonStr, password, { format: CryptoJSAesJson }).toString(CryptoJS.enc.Utf8))
  },
  /**
   * Stringify cryptojs data
   * @param {Object} cipherParams
   * @return {string}
   */
  'stringify': function (cipherParams) {
    var j = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) }
    if (cipherParams.iv) j.iv = cipherParams.iv.toString()
    if (cipherParams.salt) j.s = cipherParams.salt.toString()
    return JSON.stringify(j).replace(/\s/g, '')
  },
  /**
   * Parse cryptojs data
   * @param {string} jsonStr
   * @return {*}
   */
  'parse': function (jsonStr) {
    var j = JSON.parse(jsonStr)
    var cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(j.ct) })
    if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
    if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
    return cipherParams
  }
}
