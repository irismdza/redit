const pool = require('./index');
const jwt = require('jsonwebtoken');

module.exports = function(router) {

  router.post('/login',(req, res) => {
    console.log(req.body);

    const{ email, password } = req.body;

    pool.query(`SELECT * FROM users WHERE email='${email}' AND password=crypt('${password}', password);`)
      .then((users) => {
        if(users && users.rows.length) {
          // MAKE A STATELESS SESSION:
          const session = {
            user_email: users.rows[0].email
          }
          const JWT = jwt.sign(session, 'jwealkfja');
          console.log('this is the jwt', JWT);

          res.status(200).cookie('redit_session', JWT, {
            secure: false,
            maxAge: 7200000,
            httpOnly: true
          }).send('Success, you\'re logged in!');
          console.log('this is the session', session);
        } else {
          res.status(403).send();
        }
      }).catch((err) => {
        res.status(500).send();
  })
  });

  router.get('/logout', (req, res) => {

  });

  return router;

}