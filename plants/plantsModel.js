const db = require('../data/config');



// to get projects with resource
function getPlants() {
return db('plants') 
}

// to get a specific project by id
function getPlantsById(id) {
    return db("plants as p")
    .select(["p.*"])

    .where("p.id", id)
    .first();
}


function insert(project) {
    return db("plants")
      .insert(project)
      .then(([id]) => getPlantsById(id));
  }
  
  
  function remove(id) {
    return db("plants")
      .where("id", id)
      .del();
  }
  



module.exports = {
 getPlants,
 getPlantsById, 
 insert,
 remove
};