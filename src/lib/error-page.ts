export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
  body {
    font: 15px/1.5 system-ui, sans-serif;
    background: #000;
    color: #fff;
    display: grid;
    place-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 1.5rem;
  }

  .card {
    max-width: 28rem;
    width: 100%;
    text-align: center;
    padding: 2rem;
    border: 1px solid rgba(0,255,255,.2);
    border-radius: 24px;
    background: rgba(255,255,255,.04);
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 .5rem;
    text-transform: uppercase;
  }

  p {
    color: #9ca3af;
    margin: 0 0 1.5rem;
  }

  .actions {
    display:flex;
    gap:.5rem;
    justify-content:center;
  }

  a, button {
    padding:.7rem 1.2rem;
    border-radius:999px;
    font:inherit;
    cursor:pointer;
    text-decoration:none;
  }

  .primary {
    background:#22d3ee;
    color:#000;
    border:none;
  }

  .secondary {
    background:transparent;
    color:#22d3ee;
    border:1px solid #22d3ee;
  }
</style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
