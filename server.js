const express = require('express');

const app = express();

app.use('/css', express.static(`${__dirname}/assets/css`));
app.use('/img', express.static(`${__dirname}/assets/img`));
app.use('/build', express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT || 8000);
console.log('server started on port 8000');
