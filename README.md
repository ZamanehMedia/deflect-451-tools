# Deflect 451 Tools

The Deflect 451 Tools package simplifies the process of integrating 451 Tools into Deflect. Follow the steps below to get started:

## Installation

1. Clone this repository:

```
git clone https://github.com/ZamanehMedia/deflect-451-tools.git
```

2. Install dependencies:

```
npm install
```

## Usage

Generate the required files by running the following command:

```
npm run build --mirrors='"https://example.com/"'
```

The `--mirrors` argument can accept multiple items, separated by a comma without spaces. For example:

```
--mirrors='"https://example.com/","https://example.two.com/"'
```

This command will generate the following files:

- `dist/451-tools.js`
- `dist/451-tools-registration.js`
- `dist/451-tools-configuration.json`

Make sure to serve all files in the website's root. Import 451-tools-registration.js in every page, either inline it or use a script tag.
