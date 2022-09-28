const chalk = require('chalk')

//提示语
const messageBlue = (...info) => {
  console.log(chalk.blue(info))
}

//错误提示语
const messageRed = (...info) => {
  console.log(chalk.red(info))
}

//清空提示语
const messageClear = () => {
  console.clear()
}

module.exports = {
  messageBlue,
  messageRed,
  messageClear
}
