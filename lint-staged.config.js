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
  "cypress/integration/*.ts": [
    (files) => 'sh start-dev-server-and-test.sh ' +
               `'yarn test:e2e:run --spec ${files.join(",")}'`
  ],
  "cypress/component/*.ts": [
    (files) => 'yarn test:component --spec ' + files.join(",")
  ]
}
