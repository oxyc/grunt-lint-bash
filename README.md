# grunt-lint-inline

Grunt task for validating bash scripts. This is not really a lint tool, it
simply checks validity with bash -n.

## Getting started

```
npm install https://github.com/oxyc/grunt-lint-bash
```

```javascript
grunt.loadNpmTasks('grunt-lint-bash');
```

## Usage

```javascript
grunt.initConfig({
  bashlint: {
    src: ['**/*.sh']
  }
});
grunt.loadNpmTasks('bashlint');
```

## License

MIT
