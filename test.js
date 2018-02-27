/* eslint-env jest */

const fs = require('fs')
const path = require('path')

const prettier = require('prettier')
const standard = require('standard')

test('Compatible with standard', () => {
  const raw = fs.readFileSync(path.resolve(__dirname, 'fixture.js'), 'utf8')
  expect(() => standard.lintTextSync(formatted)).toThrow()
  const formatted = prettier.format(raw)
  standard.lintTextSync(formatted)
})
