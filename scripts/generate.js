'use strict'

const fs = require('fs')
const { resolve } = require('path')
const { promisify } = require('util')
;(async function() {
  try {
    const projectRoot = resolve(__dirname, '..')
    const irregularDir = resolve(projectRoot, 'src/lib/irregular-words')
    const readdir = promisify(fs.readdir)
    const readfile = promisify(fs.readFile)
    const createfile = promisify(fs.writeFile)
    console.log(irregularDir)
    const files = await readdir(irregularDir)
    const fileNames = files.map((file) => file.slice(0, -4))
    const fileContents = []
    for (let index = 0; index < files.length; index++) {
      const file = files[index]
      let content = await readfile(resolve(irregularDir, file), 'utf8')
      fileContents.push(content.split('\n').filter(Boolean))
    }
    for (let index = 0; index < fileContents.length; index++) {
      const contents = fileContents[index]
      const fileName = fileNames[index]
      const data = `export default ${JSON.stringify(contents)}`
      await createfile(resolve(irregularDir, `${fileName}.ts`), data)
    }
  } catch (error) {
    console.error(error.message)
  }
})()
