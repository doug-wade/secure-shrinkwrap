# secure-shrinkwrap

Resolves a security disclosure on [npm shrinkwrap](https://medium.com/@deian/npm-shrinkwrap-allows-remote-code-execution-63e6e0a566a7).

## Usage

In your package.json, add `secure-shrinkwrap` as a devDependency and then run it as a preinstall script

```javascript
{
  "devDependencies": {
    ...
    "secure-shrinkwrap": "0.0.1"
  },
  "scripts": {
    ...
    "preinstall": "secure-shrinkwrap"
  }
}

