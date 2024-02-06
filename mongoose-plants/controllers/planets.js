const Planet = require('../models/planet');
const Explorer = require('../models/explorer');


const newPlanet = (req, res) => {
    let title = "Add new Planet";
	res.render('planets/new', { title });
}

const create = async(req, res) => {
    for(let key in req.body){
        if(req.body[key] == ''){
            delete req.body[key]
        }
    }

    try {
        await Planet.create(req.body);
        res.redirect('planets/new')
    } catch (error) {
        console.log(error)
        res.redirect('planets/new')
    }
}

const index = async (req, res) => {
    try {
        const planets = await Planet.find({})
        const title = "All Planets"
        res.render('planets/index', { planets, title });
    } catch (error){
        console.log(error)
        res.redirect('/')
    }
}

async function show(req, res) {
    const planet = await Planet.findById(req.params.id).populate('explorers');
    const explorers = await Explorer.find({})
    const planetExplorers = planet.explorers

    const explorersName = planetExplorers.map((explorerMember) => explorerMember.name)

    const availableExplorers = explorers.filter((explorer) => {
        if(!explorersName.includes(explorer.name)){
        return explorer
        }
    })
    res.render('planets/show', { title: 'Planet Detail', planet, availableExplorers });
  }


module.exports = {
    new: newPlanet,
    create,
    index,
    show
};