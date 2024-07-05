# 451 Tools for Publii

The 451 Tools for Publii package simplifies the process of integrating 451 Tools into a Publii website. Follow the steps below to get started:

## Installation

1. Clone this repository:

```
git clone https://github.com/451labs/451-tools-publii-sw.git
```

2. Install dependencies:

```
npm install
```

## Usage

Generate the required files by running the following command:

```
npm run build --mirrors='"https://example.com/" --timeout="3000"'
```

### `--mirrors` argument

The `--mirrors` argument can accept multiple items, separated by a comma without spaces. For example:

```
--mirrors='"https://example.com/","https://example.two.com/"'
```

If the `--mirrors` argument is not passed, an empty mirror list will be insterted in `dist/451-tools-configuration.json`.

### `--timeout` argument

The `--timeout` argument can accept a number with the desired request timeout in milliseconds. For example:

```
--timeout=5000
```

If the `--timeout` argument is not passed, the default timeout of 3,000 milliseconds will be insterted in `dist/451-tools-configuration.json`.

## Output

This command will generate the following files:

- `dist/451-tools.js`
- `dist/451-tools-registration.js`
- `dist/451-tools-configuration.json`

Make sure to serve all files in the website's root. Import `451-tools-registration.js` in every page, either inline it or use a script tag.
