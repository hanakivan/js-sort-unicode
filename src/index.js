//Slovak language, https://en.wikipedia.org/wiki/Slovak_language, supports wide range of strange characters, like ä or ô, so should be pretty satisfactory
let JsSortUnicode_helper_lib_Intl_Collator = new Intl.Collator("sk");

export default (a, b, column = null) => {
    if(column) {
        return JsSortUnicode_helper_lib_Intl_Collator.compare(a[column], b[column]);
    }

    return JsSortUnicode_helper_lib_Intl_Collator.compare(a, b);
};