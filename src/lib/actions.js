const { promisify } = require('util');
const path = require('path');
const fs = require('fs');

const program = require('commander');
const downloadRepo = promisify(require('download-git-repo'));
const open = require('open');

const log = require('../utils/log');
const repoConfig = require('../config');

const createProject = async (project, otherArg) => {
  // 1.提示信息
  log.messageBlue('正在帮你下载项目，请耐心等待~');

  // 2.clone项目从仓库
  await downloadRepo(repoConfig.githubURL, project, { clone: true });

  // // 3.执行终端命令npm install
  // const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  // await terminal.spawn(npm, ['install'], { cwd: `./${project}` });

  // // 4.打开浏览器
  // open('http://localhost:8080/');

  // // 5.运行项目
  // await terminal.spawn(npm, ['run', 'serve'], { cwd: `./${project}` });
}


module.exports = {
  createProject
}