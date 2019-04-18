export default class IrregularWords {
    static SPECIAL_LETTERS: string[];
    static ENDS_WITH_I: string[];
    static ENDS_WITH_COMMON_CHARACTERS: {
        kah: string[];
        lah: string[];
        pun: string[];
        ku: string[];
        mu: string[];
        nya: string[];
    };
    static ENDS_WITH_SUFFIX_CHARACTERS: string[];
    static ON_PREFIX_CHARACTERS: any;
    static loadWords(filename: string, chopped?: boolean): string[];
}
//# sourceMappingURL=irregular-words.d.ts.map