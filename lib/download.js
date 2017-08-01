'use strict'
const path = require('path')
const downloadRepo = require('download-git-repo')
const $ = require('shelljs')
const configUtils = require('./config-utils')

exports.repo = function(repo, folderName, options) {
  return new Promise((resolve, reject) => {
    const dest = path.join(configUtils.reposDir, folderName)
    $.rm('-rf', dest)
    downloadRepo(repo, dest, options, err => {
      if (err) return reject(err)
      resolve(dest)
    })
  })
}
