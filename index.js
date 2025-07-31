module.exports = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head><title>Calendly API</title></head>
      <body>
        <h1>Calendly API Working!</h1>
        <p>Use endpoints: <code>/api/availability</code> or <code>/api/create-link</code></p>
      </body>
    </html>
  `);
};
