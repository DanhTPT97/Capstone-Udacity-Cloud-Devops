const express = require('express');
const router = require('./router');

const app = express();

app.disable('x-powered-by');
app.use(router);

app.listen(3000, () => {
  console.log('Running on the port 3000...');
});
