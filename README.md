# grunt-lint-bash

Grunt task for validating bash scripts. This is not really a lint tool, it
simply checks validity with bash -n.

## Getting started

This plugin requires Grunt `~0.4.0`

```
npm install grunt-lint-bash --save-dev
```

```javascript
grunt.loadNpmTasks('grunt-lint-bash');
```

## Usage

```javascript
grunt.initConfig({
  bashlint: {
    options: { force: true },
    src: ['**/*.sh']
  }
});

grunt.loadNpmTasks('grunt-lint-bash');
```

### Options

#### force

Type: `Boolean` Default value: `false`

Set `force` to true to report errors but not fail the task.

## License

MIT
