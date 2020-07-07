# js-sort-unicode 

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/js-sort-unicode?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/js-sort-unicode)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/js-sort-unicode)](https://www.npmjs.com/package/@ivanhanak_com/js-sort-unicode)

This package includes a sorting function for arrays, that will sort the array containing utf8 characters. 

## Changelog
See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:
```sh
npm install @ivanhanak_com/js-sort-unicode
```

Using yarn:
```sh
yarn add @ivanhanak_com/js-sort-unicode
```

## Import
```javascript
import unicodeSort from '@ivanhanak_com/js-sort-unicode';
```

## Usage
```javascript
const myArray = ["äpples", "xerox", "pear", "grapes", "ônions"];
myArray.sort(unicodeSort);
//modifies the array to be ["äpples", "grapes", "ônions", "pear", "xerox"]
```

## Usage with multi-dimensional array
```javascript
const users = [
    {
        name: "Ábel Horák",
    },
    {
        name: "Peter McCalister"
    },
    {
        name: "Gabriel Roth"
    },
    {
        name: "Čávo Malík"
    },
];

users.sort((a, b) => (
   //use the 3rd param, that is a key of an inside object
   unicodeSort(a, b, "name")
));
```