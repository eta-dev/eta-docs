---
id: express
title: Eta with Express.js
---

```ejs title="views/template.eta"
My favorite template engine is <%= it.favorite %> because it is: <%= it.reasons.join(', ') %>

<%~ includeFile('./footer', it) %>
```

```ejs title="views/footer.eta"
<footer>Signed: <%= it.name %> </footer>
```

```js title="index.js"
var express = require("express")
var app = express()
var eta = require("eta")

app.engine("eta", eta.renderFile)

app.set("view engine", "eta")

app.set("views", "./views")

app.get("/", function (req, res) {
  res.render("template", {
    favorite: "Eta",
    name: "Ben",
    reasons: ["fast", "lightweight", "simple"]
  })
})

app.listen(8000, function () {
  console.log("listening to requests on port 8000")
})
```
