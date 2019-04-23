export declare type Characters = ReadonlyArray<string>
export declare type CharsOrNum = Characters | number
export declare type Flag = number | undefined | null
export declare interface StaticCollectionMorphology {
  readonly VOWEL: Characters
  readonly PARTICLE_CHARACTERS: Characters
  readonly POSSESSIVE_PRONOUN_CHARACTERS: Characters
  readonly FIRST_ORDER_PREFIX_CHARACTERS: Characters
  readonly SPECIAL_FIRST_ORDER_PREFIX_CHARACTERS: Characters
  readonly SECOND_ORDER_PREFIX_CHARACTERS: Characters
  readonly SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS: Characters
  readonly NON_SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS: Characters
  readonly SPECIAL_SECOND_ORDER_PREFIX_WORDS: Characters
  readonly SUFFIX_CHARACTERS: Characters
  readonly WITH_VOWEL_SUBSTITUTION_PREFIX_CHARACTERS: Characters

  readonly REMOVED_KE: number
  readonly REMOVED_PENG: number
  readonly REMOVED_DI: number
  readonly REMOVED_MENG: number
  readonly REMOVED_TER: number
  readonly REMOVED_BER: number
  readonly REMOVED_PE: number
}

export declare type MorphologyKeys = keyof StaticCollectionMorphology

export declare interface Morphology {
  numberOfSyllables: number
  flags: number | undefined | null
  totalSyllables: (word: string) => number
  removeParticle: (word: string) => string
  removePossessivePronoun: (word: string) => string
  removeFirstOrderPrefix: (word: string) => string
  removeSecondOrderPrefix: (word: string) => string
  removeSuffix: (word: string) => string
}
