const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../public'));

// Custom view engine to render HTML files
app.engine('html', (filepath, options, callback) => {
  const fs = require('fs');
  fs.readFile(filepath, 'utf8', (err, content) => {
    if (err) return callback(err);
    return callback(null, content);
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
