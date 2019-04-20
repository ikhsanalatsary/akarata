import * as tslib_1 from "tslib";
import MorphologicalUtility from './lib/morphological-utility';
var Stemmer = /** @class */ (function (_super) {
    tslib_1.__extends(Stemmer, _super);
    function Stemmer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stem = function (word, derivationalStemming) {
            if (derivationalStemming === void 0) { derivationalStemming = true; }
            _this.flags = undefined;
            if (word.match(/\s/)) {
                word = word
                    .split(/[,\n.\s+]+/)
                    .map(function (w) { return _this.stem(w.trim().toLowerCase()); })
                    .join(', ');
            }
            else {
                _this.numberOfSyllables = _this.totalSyllables(word);
                if (_this.isStillHasManySyllables()) {
                    word = _this.removeParticle(word);
                }
                if (_this.isStillHasManySyllables()) {
                    word = _this.removePossessivePronoun(word);
                }
                if (derivationalStemming) {
                    word = _this.stemDerivational(word);
                }
            }
            return word;
        };
        return _this;
    }
    Stemmer.prototype.stemDerivational = function (word) {
        var prevSize = word.length;
        if (this.isStillHasManySyllables()) {
            word = this.removeFirstOrderPrefix(word);
        }
        if (prevSize !== word.length) {
            prevSize = word.length;
            if (this.isStillHasManySyllables()) {
                word = this.removeSuffix(word);
            }
            if (prevSize !== word.length) {
                word = this.removeSecondOrderPrefix(word);
            }
        }
        else {
            if (this.isStillHasManySyllables()) {
                word = this.removeSecondOrderPrefix(word);
            }
            if (this.isStillHasManySyllables()) {
                word = this.removeSuffix(word);
            }
        }
        return word;
    };
    Stemmer.prototype.isStillHasManySyllables = function () {
        return this.numberOfSyllables > 2;
    };
    return Stemmer;
}(MorphologicalUtility));
export default new Stemmer();
//# sourceMappingURL=stemmer.js.map