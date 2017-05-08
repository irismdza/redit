const express = require('express');
const json = require('body-parser').json;
const app = express();
const pg = require('pg');
const Pool = require('pg').Pool;
const cors = require('cors')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const database = new Pool({
  user: 'redit',
  password: 'redit',
  database: 'redit',
  port: '5432',
  host: 'localhost'
});

module.exports = database;

app.use(express.static('./website'));

const authRouter = new express.Router();

const authRoutes = require('./auth');

app.use(cors());
app.use(json());
app.use(cookieParser());

app.use('/auth', authRoutes(authRouter));

// postgresClient.connect((err) => {

//   if(err) throw err;
//   console.log('connected to postgres...');

//   app.use(json());

//   app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const query = `SELECT * FROM users WHERE email='${email}' AND password=crypt('${password}', password);`;

//     postgresClient.query(query, (err, user) => {
//       console.log(err, user.rows);
//       if(user.rows.length) return res.status(200).send();
//       return res.status(403).send('Invalid username or password...');
//     });
//   });

//   app.get('/posts', (req, res) => {
//     postgresClient.query('SELECT * FROM posts', (err, posts) => {
//       if(err) return res.status(500).send();
//       return res.status(200).json(posts.rows);
//     })
//   });

  // app.get('/weeks', (req, res) => {
  //   pool.query('SELECT * FROM weeks', (err, weeks) => {
  //     if(err) return res.status(500).send();
  //     return res.status(200).json(weeks.rows);
  //   })
  // });

  app.get('/weeks', (req, res) => {
    database.query('SELECT * FROM weeks', (err, weeks) => {
      if(err) return res.status(500).send();
      database.query('SELECT * FROM weeks', (err, lessons) => {
        const response = weeks.rows.map(week => {
          return {
            title: week.title,
            lessons: lessons.rows.filter(lesson => lesson.week_id === week.id)
          };
        });
        res.status(200).send(response);
      });
    });
  });

//   app.get('/lessons/:lesson_id/posts', (req, res) => {
//     postgresClient.query('SELECT * FROM ', (err, lessons) => {
//       if(err) return res.status(500).send();
//       return res.status(200).json(lessons.rows);
//     })
//   });



// });

  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  })