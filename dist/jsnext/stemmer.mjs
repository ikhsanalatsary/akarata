import MorphologicalUtility from './lib/morphological-utility';
class Stemmer extends MorphologicalUtility {
    constructor() {
        super(...arguments);
        this.stem = (word, derivationalStemming = true) => {
            this.flags = undefined;
            if (word.match(/\s/)) {
                word = word
                    .split(/[,\n.\s+]+/)
                    .map((w) => this.stem(w.trim().toLowerCase()))
                    .join(', ');
            }
            else {
                this.numberOfSyllables = this.totalSyllables(word);
                if (this.isStillHasManySyllables()) {
                    word = this.removeParticle(word);
                }
                if (this.isStillHasManySyllables()) {
                    word = this.removePossessivePronoun(word);
                }
                if (derivationalStemming) {
                    word = this.stemDerivational(word);
                }
            }
            return word;
        };
    }
    stemDerivational(word) {
        let prevSize = word.length;
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
    }
    isStillHasManySyllables() {
        return this.numberOfSyllables > 2;
    }
}
export default new Stemmer();
//# sourceMappingURL=stemmer.js.map