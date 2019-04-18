// tslint:disable:no-any
var IrregularWords = /** @class */ (function () {
    function IrregularWords() {
    }
    IrregularWords.loadWords = function (filename, chopped) {
        if (chopped === void 0) { chopped = false; }
        var contents = require("./irregular-words/" + filename).default;
        if (chopped) {
            contents = contents.map(function (word) { return word.slice(1, word.length); });
        }
        return contents;
    };
    IrregularWords.SPECIAL_LETTERS = ['K', 'P', 'N', 'R'];
    IrregularWords.ENDS_WITH_I = IrregularWords.loadWords('akhiran-i');
    IrregularWords.ENDS_WITH_COMMON_CHARACTERS = {
        kah: IrregularWords.loadWords('kah'),
        lah: IrregularWords.loadWords('lah'),
        pun: IrregularWords.loadWords('pun'),
        ku: IrregularWords.loadWords('ku'),
        mu: IrregularWords.loadWords('mu'),
        nya: IrregularWords.loadWords('nya'),
    };
    IrregularWords.ENDS_WITH_SUFFIX_CHARACTERS = ['majikan'].concat(IrregularWords.ENDS_WITH_I);
    return IrregularWords;
}());
export default IrregularWords;
IrregularWords.SPECIAL_LETTERS.map(function (letter) {
    // console.log(letter);
    ;
    IrregularWords["BEGINS_WITH_" + letter] = IrregularWords.loadWords("" + letter.toLowerCase(), true);
});
IrregularWords.ON_PREFIX_CHARACTERS = {
    meng: IrregularWords.BEGINS_WITH_K,
    peng: IrregularWords.BEGINS_WITH_K,
    mem: IrregularWords.BEGINS_WITH_P,
    pem: IrregularWords.BEGINS_WITH_P,
};
//# sourceMappingURL=irregular-words.js.map