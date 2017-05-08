const fs = require('fs');
const path = require('path');

module.exports = function(router) {

  router.get('/weeks', (req, res) => {
    const mockdata = fs.readFileSync(path.resolve(__dirname + './../mockdata.json'));
    const weeks = JSON.parse(mockdata).weeks;
    res.status(200).json(weeks);
  });

  router.get('/posts', (req, res) => {
    const mockdata = fs.readFileSync(path.resolve(__dirname + './../mockdata.json'));
    const posts = JSON.parse(mockdata).posts;
    res.status(200).json(posts);

    // const posts = JSON.parse(mockdata).posts
    //   .filter(post => post.lessons.find(lesson => lesson.id === req.params.lesson_id));
    // if (posts.length) {
    //   res.status(200).send(posts)
    // } else {
    //   res.status(404).send();
    // }
  })


  // router.get('/lessons/:lesson_id/posts', (req, res) => {
  //   const mockdata = fs.readFileSync(path.resolve(__dirname + './../mockdata.json'));
  //   const posts = JSON.parse(mockdata).posts
  //     .filter(post => post.lessons.find(lesson => lesson.id === req.params.lesson_id));
  //   if (posts.length) {
  //     res.status(200).send(posts)
  //   } else {
  //     res.status(404).send();
  //   }
  // })

  return router;

}