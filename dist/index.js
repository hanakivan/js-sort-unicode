"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//Slovak language, https://en.wikipedia.org/wiki/Slovak_language, supports wide range of strange characters, like ä or ô, so should be pretty satisfactory
var JsSortUnicode_helper_lib_Intl_Collator = new Intl.Collator("sk");

var _default = function _default(a, b) {
  var column = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (column) {
    return JsSortUnicode_helper_lib_Intl_Collator.compare(a[column], b[column]);
  }

  return JsSortUnicode_helper_lib_Intl_Collator.compare(a, b);
};

exports["default"] = _default;