import { Characters } from '../types'
import * as mainFile from './irregular-words/main'

export type IrregularKeys = keyof typeof IrregularWords
export type CommonCharacters = keyof typeof IrregularWords.ENDS_WITH_COMMON_CHARACTERS
export type fileKeys = keyof typeof mainFile

export default interface IrregularWords {
  readonly [k: string]: { [k: string]: Characters } | Characters
}

export default class IrregularWords implements IrregularWords {
  static SPECIAL_LETTERS: Characters = ['K', 'P', 'N', 'R']
  static ENDS_WITH_I: Characters = IrregularWords.loadWords('akhiranI')

  static ENDS_WITH_COMMON_CHARACTERS = {
    kah: IrregularWords.loadWords('kah'),
    lah: IrregularWords.loadWords('lah'),
    pun: IrregularWords.loadWords('pun'),
    ku: IrregularWords.loadWords('ku'),
    mu: IrregularWords.loadWords('mu'),
    nya: IrregularWords.loadWords('nya'),
  } as const

  static ENDS_WITH_SUFFIX_CHARACTERS: Characters = ['majikan'].concat(
    IrregularWords.ENDS_WITH_I
  )
  static ON_PREFIX_CHARACTERS: { [k: string]: Characters }
  static BEGINS_WITH_K: Characters
  static BEGINS_WITH_P: Characters
  static BEGINS_WITH_N: Characters
  static BEGINS_WITH_R: Characters

  static loadWords(filename: string, chopped = false): Characters {
    let contents: string[] = mainFile[filename as fileKeys]

    if (chopped) {
      contents = contents.map((word) => word.slice(1, word.length))
    }

    return contents
  }
}

IrregularWords.SPECIAL_LETTERS.map((letter) => {
  // console.log(letter)
  IrregularWords[
    `BEGINS_WITH_${letter}` as IrregularKeys
  ] = IrregularWords.loadWords(`${letter.toLowerCase()}`, true)
})

IrregularWords.ON_PREFIX_CHARACTERS = {
  meng: IrregularWords.BEGINS_WITH_K,
  peng: IrregularWords.BEGINS_WITH_K,
  mem: IrregularWords.BEGINS_WITH_P,
  pem: IrregularWords.BEGINS_WITH_P,
} as const
