#!/usr/bin/env node
const execSync = require('child_process').execSync;
const path = require('path');
const assert = require('assert');
const fs = require('fs');

const srcFiles = [
  path.join('examples', 'example.component.ts')
];

srcFiles.forEach(filePath => {
  const output = ('' + execSync(`index.js ${filePath} -F`))
    .replace(/\r\n/g, '\n');
  const expected = ('' + fs.readFileSync(filePath.replace('.ts', '.spec.ts')))
    .replace(/\r\n/g, '\n');
  if (output === expected) {
    console.log('passed check', filePath);
  } else {
    fs.writeFileSync(filePath + '.before.txt', expected);
    fs.writeFileSync(filePath + '.after.txt', output);
    throw new Error('Error on' + filePath);
  }
});
