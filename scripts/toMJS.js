'use strict'

const path = require('path')
const glob = require('tiny-glob')
const cpFile = require('cp-file')

/**
 * @param {string} file
 */
const changeExt = (file) => file.replace(/\.js$/, '.mjs')

const parseOptions = ({ inputDir = 'esm', outputDir = 'lib', cwd = '.' }) => ({
  inputDir,
  outputDir,
  cwd: path.resolve(process.cwd(), cwd),
})

/**
 * @param {{ inputDir?: string | undefined; outputDir?: string | undefined; cwd?: string | undefined; }} options
 */
async function copyMjs(options) {
  const { inputDir, outputDir, cwd } = parseOptions(options)

  const files = await glob(`${inputDir}/**/*.js`)

  await Promise.all(
    files.map((file) => {
      const from = path.join(cwd, file)
      const to = path.join(
        path.resolve(cwd, outputDir),
        changeExt(file.slice(inputDir.length))
      )
      return cpFile(from, to)
    })
  )
}

module.exports = copyMjs
