---
id: express
title: Express.js
---

Eta no longer supports the Express.js `app.engine()` function, but it's still completely possible to use with Express.js! Here's a quick example.

```js
const express = require("express")
const app = express()
const path = require("path")
const port = 3000

var { Eta } = require("eta")

// views directory
let viewpath = path.join(__dirname, "views")
// on Deno, use let viewpath = Deno.cwd()+'/views/'
let eta = new Eta({ views: viewpath, cache: true })

/* no more needed with Deno or Node (Eta v3.x.x)
app.engine("eta", eta.render)
app.set("view engine", "eta")
*/

app.get("/", (req, res) => {
  // use status(statusNumber) and send(template)
  res.status(200).send(eta.render("index", { title: "Hey", place: "Hello there!" }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
