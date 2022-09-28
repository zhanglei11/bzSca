const program = require('commander')

const HelpOptions = () => {
  program.option('-l --check', '查看')
  program.on('--help', function () {})
}

module.exports = HelpOptions
