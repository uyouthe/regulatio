# 🎛️ Regulatio
High performance regulated inputs with custom validation

## Why?

I like the React controllable inputs experience but I never knew how to ensure similar performance without React. I did my research and finally realized the solution.

You're looking at it right now.

## What it does?

It regulates <input> fields, allowing your users to enter only the values that are approved by your validation function. Validation function can be arbitrary and it is not limited to just regex. 

## Usage
```
npm install uyouthe/regulatio
```
or
```HTML
<script src="https://cdn.jsdelivr.net/gh/uyouthe/regulatio/dist/regulatio.min.js"></script>
```

```JS
const input = document.getElementById('your-input')
const allowOnlyIntegersGreaterThanZero = value => /\d*/g.test(value) && parseInt(value, 10) > 0

regulatio(input, allowOnlyIntegersGreaterThanZero)
```

Enjoy!
