const { promisify } = require('util');
// const path = require('path');
// const fs = require('fs');

// const program = require('commander');
const downloadRepo = promisify(require('download-git-repo'));
// const open = require('open');

const log = require('../utils/log');
// const githubURL = 'direct:https://github.com/zhanglei11/bzWeb.git'
const githubURL = 'direct:https://gitee.com/zhanglei_gitee_1026/jiaoshoujia.git#master'
// const githubURL ='direct:https://gitee.com/brilliantmanufacturing/bz-component.git'

const createProject = async (project, otherArg) => {
  // 1.提示信息
  log.messageBlue('正在帮你下载项目，请耐心等待~');

  // 2.clone项目从仓库
  // await downloadRepo(githubURL, project, { clone: true });
  await downloadRepo(githubURL, project, { clone: true });
  
}

module.exports = {
  createProject
}