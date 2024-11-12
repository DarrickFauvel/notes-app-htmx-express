export const home = () => /*html*/ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <script src="https://unpkg.com/htmx.org@2.0.3" integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq" crossorigin="anonymous"></script>
  <title>Notes App (HTMX + Express) | Darrick Develops</title>
</head>

<body>
  <header>
    <h1>Notes App</h1>
    <span>using HTMX + Express</span>
  </header>

  <main>
    <form hx-post="/notes" hx-target="#notes-list">
      <input type="text" name="note" id="note-text-input" />
      <button>Create Note</button>
    </form>

    <button hx-get="/notes" hx-target="#notes-list" hx-swap="innerHTML">Show List</button>
    <ul hx-get="/notes" hx-swap="innerHTML" hx-trigger="load" id="notes-list"></ul>
  </main>
  
</body>
</html>`
