import express from 'express';
import path from 'path';
import paths from '../../../config/util/paths';

export const app = express();

app.use(express.static(path.resolve(paths.build.frontend.root)));

app.get('/', (req, res) => {
  res.status(200).sendFile(paths.build.public.html);
});

app.get('/about', (req, res) => {
  res.send({ message: 'Hello, about page!' });
});
