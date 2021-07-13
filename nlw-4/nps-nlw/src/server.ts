import express from 'express';

const app = express();

app.get('/aula01', (request, response) => {
  return response.json({
    message: 'Hello World - NLW #04'
  });
});

app.post('/aula01', (request, response) => {
  return response.json({
    message: 'Aula assistida com sucesso!'
  });
});

app.listen(3333, () => console.log('Server is running on port 3333!'));