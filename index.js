#!/usr/bin/env node
const program = require('commander');

const HelpOptions = require('./src/core/help');
const createCommands = require('./src/core/create')

const log = require('./src/utils/log')

// 定义显示模块的版本号
program.version(require('./package.json').version);

// 给help增加其他选项
HelpOptions();

// 创建命令
createCommands();

// 解析终端指令
program.parse(process.argv);




