---
id: cheatsheet
title: Cheatsheet
---

## Conditionals

```ejs
{{~if(it.someval === "someothervalue")}}
Display this!
{{#else}}
They don't equal
{{/if}}
```

## Looping over arrays

```ejs
{{~each(it.someArray) => val, index}}
The current array item is {{val}}, the current index is {{index}}
{{/each}}
```

## Looping over objects

```
{{~foreach(it.someObject) => key, val}}
The current object key is {{key}}, and the value is {{val}}
{{/foreach}}
```

## Logging to the console

```
{{!console.log("The value of it.num is: " + it.num);}}
```

**Note: you must include a semicolon (`;`) or template compilation will fail**
