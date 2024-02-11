const Planet = require('../models/planet');
const Explorer = require('../models/explorer.js');

async function index(req, res) {
  const planets = await Planet.find({});
  res.render('planets/index', { title: 'All Planets', planets });
}

async function show(req, res) {
  const movie = await Planet.findById(req.params.id).populate("cast");
  const explorers = await Explorer.find({ })
  const explorerTeam = planet.team;
  // create new array 
  const teamIds = explorerTeam.map((teamMember) => teamMember.id);


  const availableExplorers  = explorers.filter((explorer)=> {
    if (!teamIds.includes(explorer.name)){
      return explorer;
    }
  })


  res.render('planets/show', { title: 'Planet Detail', Planet, availableExplorers });
}

function newPlanet(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('planets/new', { title: 'Add Planet', errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.hasMoons = !!req.body.hasMoons;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Planet.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/Planets');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('planets/new', { errorMsg: err.message });
  }
}

module.exports = {
  index,
  show,
  newPlanet,
  create
};