import express from 'express';

const app = express();
const port = 8080;
const options = {
  root: import.meta.dir,
}

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('pages/index.html', options);
});

app.get('/about.html', (req, res) => {
  res.sendFile('pages/about.html', options);
});

app.get('/contact-me.html', (req, res) => {
  res.sendFile('pages/contact-me.html', options);
});

app.get('github.svg', (req, res) => {
  res.sendFile('github.svg', options);
});

app.get('scrambled_eggs.jpg', (req, res) => {
  res.sendFile('scrambled_eggs.jpg', options);
});

app.get('styles.css', (req, res) => {
  res.sendFile('styles.css', options);
});

app.use((req, res) => {
  res.status(404).sendFile('pages/404.html', options);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
