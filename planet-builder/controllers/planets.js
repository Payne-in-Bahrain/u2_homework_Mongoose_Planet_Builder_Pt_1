const Planet = require('../models/planet');
/*try {
  const catDoc = await Cat.create({ name: 'Morris', breed: 'Orange Tabby' });
  console.log(catDoc);
} catch (err) {
  console.error(err);
}*/

const newPlanet = (req, res) => {
  const name = 'Add a Planet'
  // render the new template
  res.render('planets/new', { name })
}
const create = async (req, res) => {
  req.body.hasMoons = !!req.body.hasMoons
  for (let key in req.body) {
    if (req.body[key] === '') {
      delete req.body[key]
    }
  }
  try {
    await Planet.create(req.body)
    res.redirect('/planets/new')
  } catch (error) {
    console.error(error)
    res.redirect('/planets/new')
  }
}
const index = async (req, res) => {
  try {
    const planets = await Planet.find({})
    const title = 'Add a Planet'
    res.render('planets/index.ejs', { planets, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}
module.exports = {
  newPlanet,
  create,
  index
}