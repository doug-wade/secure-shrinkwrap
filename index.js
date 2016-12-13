#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const shrinkwrapPath = path.join(process.cwd(), 'npm-shrinkwrap.json');
const shrinkwrapContents = fs.readFileSync(shrinkwrapPath);
const shrinkwrap = JSON.parse(shrinkwrapContents);

shrinkwrap.dependencies = updateDependencies(shrinkwrap.dependencies);
fs.writeFileSync(shrinkwrapPath, JSON.stringify(shrinkwrap));

function updateDependencies(deps) {
  for (let [key, value] of Object.entries(deps)) {
    if (value.dependencies) {
      value.dependencies = updateDependencies(value.dependencies);
    }
    if (value.resolved && value.resolved.startsWith('http://')) {
      value.resolved = value.resolved.replace('http://', 'https://');
    }
    deps[key] = value;
  }
  return deps;
}
