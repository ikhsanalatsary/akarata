// tslint:disable:no-any
import * as mainFile from './irregular-words/main'

export default class IrregularWords {
  static SPECIAL_LETTERS = ['K', 'P', 'N', 'R']
  static ENDS_WITH_I = IrregularWords.loadWords('akhiranI')

  static ENDS_WITH_COMMON_CHARACTERS = {
    kah: IrregularWords.loadWords('kah'),
    lah: IrregularWords.loadWords('lah'),
    pun: IrregularWords.loadWords('pun'),
    ku: IrregularWords.loadWords('ku'),
    mu: IrregularWords.loadWords('mu'),
    nya: IrregularWords.loadWords('nya'),
  }

  static ENDS_WITH_SUFFIX_CHARACTERS = ['majikan'].concat(
    IrregularWords.ENDS_WITH_I
  )
  static ON_PREFIX_CHARACTERS: any

  static loadWords(filename: string, chopped = false) {
    let contents: string[] = (mainFile as any)[filename]

    if (chopped) {
      contents = contents.map((word) => word.slice(1, word.length))
    }

    return contents
  }
}

IrregularWords.SPECIAL_LETTERS.map((letter) => {
  // console.log(letter);
  ;(IrregularWords as any)[`BEGINS_WITH_${letter}`] = IrregularWords.loadWords(
    `${letter.toLowerCase()}`,
    true
  )
})
;(IrregularWords as any).ON_PREFIX_CHARACTERS = {
  meng: (IrregularWords as any).BEGINS_WITH_K,
  peng: (IrregularWords as any).BEGINS_WITH_K,
  mem: (IrregularWords as any).BEGINS_WITH_P,
  pem: (IrregularWords as any).BEGINS_WITH_P,
}
