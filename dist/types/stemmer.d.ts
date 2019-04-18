import MorphologicalUtility from './lib/morphological-utility';
declare class Stemmer extends MorphologicalUtility {
    stem: (word: string, derivationalStemming?: boolean) => string;
    private stemDerivational;
    private isStillHasManySyllables;
}
declare const _default: Stemmer;
export default _default;
//# sourceMappingURL=stemmer.d.ts.map