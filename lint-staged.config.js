/* eslint-env node */
module.exports = {
  "*.{js,ts,vue}": [
    "yarn lint:script",
  ],
  "src/**/*.{ts,vue}": [
    () => "yarn lint:type:app"
  ],
  "cypress/**/*.ts": [
    () => "yarn lint:type:test"
  ],
}
