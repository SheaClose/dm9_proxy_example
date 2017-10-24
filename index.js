const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 3001,
  app = express(),
  todos = ['do stuff', 'do other stff'];
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/build'));

app.get('/api/todos', (req, res) => {
  return res.status(200).json(todos);
});
app.post('/api/todos', (req, res) => {
  todos.push(req.body.todo);
  return res.status(200).json(todos);
});

app.listen(port, function() {
  console.log('Server listening on port', port);
});
