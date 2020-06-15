import { app } from './endpoints';
const port = 3000;

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
