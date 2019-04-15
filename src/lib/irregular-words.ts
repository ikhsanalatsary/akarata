// tslint:disable:no-any
import * as fs from 'fs'
import * as path from 'path'

const SPECIAL_LETTERS = ['K', 'P', 'N', 'R']
SPECIAL_LETTERS.map((letter) => {
  ;(IrregularWords as any)[`BEGINS_WITH_${letter}`] = IrregularWords.loadWords(
    `${letter.toLowerCase()}.txt`,
    true
  )
})

// export default interface IrregularWords {
//   [key: string]: any;
// }

export default class IrregularWords {
  static ON_PREFIX_CHARACTERS = {
    meng: (IrregularWords as any).BEGINS_WITH_K,
    peng: (IrregularWords as any).BEGINS_WITH_K,
    mem: (IrregularWords as any).BEGINS_WITH_P,
    pem: (IrregularWords as any).BEGINS_WITH_P,
  }

  static ENDS_WITH_I = IrregularWords.loadWords('akhiran-i.txt')

  static ENDS_WITH_COMMON_CHARACTERS = {
    kah: IrregularWords.loadWords('kah.txt'),
    lah: IrregularWords.loadWords('lah.txt'),
    pun: IrregularWords.loadWords('pun.txt'),
    ku: IrregularWords.loadWords('ku.txt'),
    mu: IrregularWords.loadWords('mu.txt'),
    nya: IrregularWords.loadWords('nya.txt'),
  }

  static ENDS_WITH_SUFFIX_CHARACTERS = IrregularWords.ENDS_WITH_I.unshift(
    'majikan'
  )

  static loadWords(filename: string, chopped = false) {
    const fd = fs.openSync(IrregularWords.absolutePath(filename), 'r')

    let content = ''

    const buffer = Buffer.alloc(10)

    buffer.fill(0)

    let readCount = fs.readSync(fd, buffer, 0, 10, null)

    while (readCount > 0) {
      // console.log("Read " + readCount + " bytes.");

      content += buffer.toString().substr(0, readCount)

      readCount = fs.readSync(fd, buffer, 0, 10, null)
    }

    fs.closeSync(fd)

    let contents = content.split('\n')

    if (chopped) {
      contents = contents.map((word) => word.slice(1, word.length))
    }

    return contents
  }

  static absolutePath(filename: string) {
    return path.join(__dirname, 'irregular-words', filename)
  }
}

// (IrregularWords as any).ON_PREFIX_CHARACTERS = {
//   meng: (IrregularWords as any).BEGINS_WITH_K,
//   peng: (IrregularWords as any).BEGINS_WITH_K,
//   mem: (IrregularWords as any).BEGINS_WITH_P,
//   pem: (IrregularWords as any).BEGINS_WITH_P
// };
