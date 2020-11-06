const express = require("express")
const db = require("../plants/plantsModel")
const { validatePlantsId } = require("../middleware/plants")
const router = express.Router()

// to get all plants of specific id
router.get("/plants", async (req, res, next) => {
	try {
		const plants = await db.getPlants()
		res.json(plants)
	} catch(err) {
		next(err)
	}
})

// to get a specific plan of id
router.get("/plants/:id", validatePlantsId(), (req, res) => {
    res.status(200).json(req.plants);
  });



// request to add a new action
router.post("/plants", async (req, res, next) => {
	try {
   
	   const projects = await db.insert(req.body);
   
	   res.status(201).json(projects);
	 } catch (err) {
	   next(err);
	 } 
   });
   
   
   
   // request to change actions 
   router.delete("/plants/:id", async (req, res, next) => {
	 try {
	   const projects = await db.remove(req.params.id);
   
	   if (projects > 0) {
		 res.status(200).json({
		   message: "The plants has been erased from this part of the Earth",
		 });
	   } else {
		 res.status(404).json({
		   message: "The plants could not be found",
		 });
	   }
	 } catch (error) {
	   next(error);
	 }
   });
   
module.exports = router