# 🎛️ Regulatio
<p align="center">
    <a href="https://github.com/mvoloskov/regulatio/blob/master/package.json"><img src="https://img.shields.io/badge/dependencies-0-brightgreen" alt="Dependencies"></a>
    <a href="https://www.npmjs.com/package/regulatio"><img alt="npm" src="https://img.shields.io/npm/v/regulatio"></a>
    <img alt="License" src="https://img.shields.io/github/license/mvoloskov/regulatio?color=brightgreen">
    <a href="https://www.buymeacoffee.com/mvoloskov"><img alt="Sponsor this project" src="https://img.shields.io/badge/-sponsor-ffdd00?logo=buy-me-a-coffee&logoColor=black"></a>
    <a href="https://github.com/mvoloskov"><img alt="My github" src="https://img.shields.io/github/followers/mvoloskov?style=social"></a>
    <a href="https://twitter.com/intent/user?screen_name=mvoloskov"><img alt="My twitter" src="https://img.shields.io/twitter/follow/mvoloskov?style=social"></a>
</p>
<p align="center">
    <a href="https://codepen.io/uyouthe/pen/abNEvrw">Demo</a>
    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="#usage">Usage</a>
    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://miloslav.website">Author</a>
</p>

High performance regulated inputs with custom validation.

## Why?

I like the React controllable inputs experience but I never knew how to ensure similar performance without React. I did my research and finally realized the solution.

You're looking at it right now.

## What it does?

It regulates `<input>` fields, allowing your users to enter only the values that are approved by your validation function. Validation function can be arbitrary and it is not limited to just regex. 

## Usage
```
npm install mvoloskov/regulatio
```
or
```HTML
<script src="https://cdn.jsdelivr.net/gh/mvoloskov/regulatio/dist/regulatio.min.js"></script>
```

```JS
const input = document.getElementById('your-input')
const allowOnlyIntegersGreaterThanZero = value => /\d*/g.test(value) && parseInt(value, 10) > 0

const destroy = regulatio(input, allowOnlyIntegersGreaterThanZero)

// remove all event listeners when we don't need them anymore
destroy()
```

Enjoy!
