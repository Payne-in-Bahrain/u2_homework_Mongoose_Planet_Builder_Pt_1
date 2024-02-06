const Planet =require("../models/planets")
const Explorer =require("../models/explorer")

const newPlanet = (req,res) => {
res.render('planets/new')
}

const createPlanet = async (req,res) => {
    //console.log("req bodyyyy:",req.body )
    try {

          await Planet.create(req.body)
          res.redirect('/planets')
    }catch (error){
        console.log(error)
        res.redirect('/planets')
    }

}

const index = async (req,res) =>{
try {
//console.log("req bodyyyy:",req.body )
const planets = await Planet.find({})
//console.log("object planet",planets)

res.render('planets/index',{planets})
}catch (error){
    console.log(error)
    res.redirect('/')
}


}

const showOne = async (req,res) => {
    const planet = await Planet.findById(req.params.id).populate('explorer');
    planet.plant.sort()
    planet.save()
    const explorers=await Explorer.find({});
    console.log("explorer",explorers)

    const explorerName= planet.explorer
    
    const explorerNames = planet.explorer.map((explorer) => explorer.name)
    console.log("explorerNamr",explorerNames)
    const avalibleExplorer =explorers.filter((explorer) => {
       if (!explorerNames.includes(explorer.name)){
             return explorer.name
         }
     })
     console.log("avalibleExplorer",avalibleExplorer)
    res.render('planets/show', {  planet ,explorers,avalibleExplorer});
}
module.exports = {
    newPlanet ,
    createPlanet,
    index,
    showOne
}