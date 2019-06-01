var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const persons = [
  {
    route: 'Ujjwal',
    name: 'Ujjwal Bhasin',
    age: 20,
    cityBorn: 'Barrie',
    cityResiding: 'Barrie',
    hobby: 'playing fifa'
  },
  {
    route: 'Daniel',
    name: 'Daniel Bilzerian',
    age: 22,
    cityBorn: 'Burlington',
    cityResiding: 'Barrie',
    hobby: 'watching tv shows'
  },
  {
    route: 'riani',
    name: 'Riani lima',
    age: 21,
    cityBorn: 'Valencia',
    cityResiding: 'Barrie',
    hobby: 'partying'
  }
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const person = persons.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!person) return next(new Error('Unable to find the person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('person', person);
});

// router.get('/Ujjwal', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     name: 'Ujjwal Bhasin',
//     age: 20,
//     cityBorn: 'Barrie',
//     cityResiding: 'Barrie',
//     hobby: 'playing fifa'
//   });
// });

// router.get('/Daniel', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     name: 'Daniel Bilzerian',
//     age: 22,
//     cityBorn: 'Burlington',
//     cityResiding: 'Barrie',
//     hobby: 'watching movies.'
//   });
// });

module.exports = router;
