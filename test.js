/* eslint-env jest */

const fs = require('fs')

const prettier = require('prettier')
const standard = require('standard')

test('Compatible with standard', () => {
  const fixturePath = require.resolve('./fixture.js')
  const raw = fs.readFileSync(fixturePath, 'utf8')
  expect(() => standard.lintTextSync(formatted)).toThrow()
  const formatted = prettier.format(raw, { filepath: fixturePath })
  standard.lintTextSync(formatted)
})
