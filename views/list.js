import { NOTES_DATA } from "../data/data.js"

export const renderNotesListItems = (notes) => {
  return notes
    .map((note) => {
      return `<li data-id={note.id}>${note.text}</li>`
    })
    .join("")
}
