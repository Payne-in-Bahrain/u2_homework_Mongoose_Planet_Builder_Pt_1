const Planet =require("../models/planets")

const create = async (req,res) => {
 
    try {
        let planet =await Planet.findById(req.params.id)
        planet.plant.push(req.body);
        const updatedplanet = await planet.save();
        res.redirect(`/planets/${updatedplanet._id}`);

    }catch (error){
       console.log(error)
       res.status(500).send(error.message)
    }
}

module.exports = {create}
