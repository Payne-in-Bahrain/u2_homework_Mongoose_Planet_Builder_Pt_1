const Planet =require("../models/planets")

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
console.log("object planet",planets)

res.render('planets/index',{planets})
}catch (error){
    console.log(error)
    res.redirect('/')
}

}
module.exports = {
    newPlanet ,
    createPlanet,
    index
}