const express = require ( 'express' );
const app = express();
app.use((req, res, next) =>{
  console.log('First Middleware');
  next();
});

app.use('/api/posts', (req, res, next) =>{
  const posts = [
    {
      id: '1',
      title: 'First server-side post',
      content: 'This is comming from the server'
    },
    {
      id: '2',
      title: 'Second server-side post',
      content: 'This is commiing from the server'
    },
    {
      id: '3',
      title: 'Third server-side post',
      content: 'This is comming from the server'
    }

  ];
  res.json(posts);
});

module.exports = app;
