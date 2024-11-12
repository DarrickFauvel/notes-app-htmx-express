import express from "express"
import { home } from "./views/index.js"
import { renderNotesListItems } from "./views/list.js"
import { NOTES_DATA } from "./data/data.js"

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send(home())
})

app.get("/notes", (req, res) => {
  res.send(renderNotesListItems(NOTES_DATA))
})

app.post("/notes", (req, res) => {
  const { note } = req.body

  const id = NOTES_DATA.length + 1

  NOTES_DATA.push({ id, text: note })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
