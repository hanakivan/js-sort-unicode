# Join classNames with react-css-modules 

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/react-join-classnames?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/react-join-classnames)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/react-join-classnames)](https://www.npmjs.com/package/@ivanhanak_com/react-join-classnames)

A simple & lightweight JavaScript utility to join an array of classNames while using react-css-modules. 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/react-join-classnames
```

Using yarn:

```sh
yarn add @ivanhanak_com/react-join-classnames
```

## Import
```javascript
import classes from '@ivanhanak_com/react-join-classnames';
```

## Usage

The function takes any number of string arguments.
You can also use conditionals to append a className only if the condition is true.   

```jsx harmony
//just a list of strings
<div className={classes('bugs', 'bunny')} />; 
//renders  <div class="bugs bunny"></div>

//another way of writing down string classNames
<div className={classes('bugs bunny')} />; 
//renders  <div class="bugs bunny"></div>

//integers are re-typed into strings
<div className={classes(1, 'bugs', 'bunny')} />; 
//renders  <div class="1 bugs bunny"></div>

//works with ternary operator
const isInputFocused = false;
<input className={classes("input", isInputFocused ? "inputFocused" : null)} />; 
//renders  <input class="input" />

//works with nullish coalescing operator
const isInputDisabled = true;
<input className={classes("input", isInputDisabled && "inputDisabled")} />; 
//renders  <input class="input inputDisabled" />

//correctly handles booleans, nulls and undefineds
<div className={classes(true, false, null, undefined)} />; 
//renders  <div class=""></div>

//if you need to render booleans, nulls or undefineds, put them as a string
<div className={classes("true", "false", "null", "undefined")} />; 
//renders  <div class="true false null undefined"></div>


//works perfect with state as well as props
props = {
    carrotsAvailable: 10,
};
state = {
    mischief: "bugs bunny",
};
<div className={classes(this.props.carrotsAvailable, 'carrots for', this.state.mischief)} />; 
//renders  <div class="10 carrots for bugs bunny></div>

//works perfect with css-modules
import style from './style.css';
<div className={classes("globalDivStyle", style.localDivStyle)} />; 
//renders  <div class="globalDivStyle localDivStyle_transpilled_class_name_buRgu5></div>
```

## Browser support
Chrome: of horse

Firefox: of horse

IE: 9+

Opera: o, what?
