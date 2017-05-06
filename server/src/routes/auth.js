const pool = require('../index');

module.exports = function(router) {

  router.post('/login',(req, res) => {
    const{ email, password } = req.body;

    pool.query(`SELECT * FROM users WHERE email='${email}' AND password=crypt('${password}, password);`)
      .then((users) => {
        if(users && users.rows.length) {
          return res.status(200).send(user.rows);
        } else return res.status(403).send('Invalid username or password...');
      });
  });

  router.get('/logout', (req, res) => {

  });

  return router;

}