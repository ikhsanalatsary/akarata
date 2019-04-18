function isStartsWith(text, byTextLength, prefix) {
    const prefixLength = prefix.length;
    if (prefixLength > byTextLength)
        return false;
    for (let i = 0; i < prefixLength; i++) {
        if (text[i] !== prefix[i])
            return false;
    }
    return true;
}
function isEndsWith(text, byTextLength, suffix) {
    const suffixLength = suffix.length;
    if (suffixLength > byTextLength)
        return false;
    for (let i = 0; i < suffixLength; i++) {
        if (text.substring(text.length - suffixLength)[i] !== suffix[i]) {
            return false;
        }
    }
    return true;
}
export default {
    isStartsWith,
    isEndsWith,
};
//# sourceMappingURL=stemmer-utility.js.map