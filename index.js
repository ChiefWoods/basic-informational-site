import express from 'express';

const app = express();
const port = 8080;
const options = {
  root: import.meta.dir,
}

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile('pages/index.html', options);
});

app.get('/about.html', (req, res) => {
  res.sendFile('pages/about.html', options);
});

app.get('/contact-me.html', (req, res) => {
  res.sendFile('pages/contact-me.html', options);
});

app.get('/assets/icons/github.svg', (req, res) => {
  res.sendFile('assets/icons/github.svg', options);
});

app.get('/assets/images/scrambled_eggs.jpg', (req, res) => {
  res.sendFile('assets/images/scrambled_eggs.jpg', options);
});

app.get('/styles.css', (req, res) => {
  res.sendFile('styles.css', options);
});

app.use((req, res) => {
  res.status(404).sendFile('pages/404.html', options);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
