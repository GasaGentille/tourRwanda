/* eslint-disable */
// Polyfill pour Object.create
'function' != typeof Object.create && (Object.create = function () { function b () {} var f = Object.prototype.hasOwnProperty
  return function (d) { if ('object' != typeof d) throw TypeError('Object prototype may only be an Object or null'); b.prototype = d; var e = new b()
    b.prototype = null; if (1 < arguments.length) { var c = Object(arguments[1]), a
      for (a in c)f.call(c, a) && (e[a] = c[a]) } return e } }())
// Polyfill pour Date.now()
Date.now || (Date.now = function () { return (new Date()).getTime() })
/* eslint-enable */

var _ = {
  extend: function (destObj, obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        destObj[key] = obj[key]
      }
    }
    return destObj
  }
}

function Ad () {
  this.defaultPage = '_other'
  this.parseUrl()
  this.preRender()
}
_.extend(Ad.prototype, {
  parseUrlPart: function (urlPart, separator) {
    var keyvalues = {}
    separator = separator || '&'

    if (urlPart.length === 0) {
      return keyvalues
    }

    var keyvalue
    var search = urlPart.substr(1).split(separator)
    for (var i = 0; i < search.length; ++i) {
      keyvalue = search[i].split('=')
      keyvalues[keyvalue[0]] = keyvalue[1]
    }
    return keyvalues
  },
  parseUrl: function () {
    this.url = {
      search: this.parseUrlPart(window.location.search),
      hash: this.parseUrlPart(window.location.hash, ';')
    }
  },
  hasConsent: function () {
    return this.url.search.consent === "true";
  },
  hide: function () {
    this.isHidden = true
  },
  preRender: function () {
    // À surcharger...
  }
})
