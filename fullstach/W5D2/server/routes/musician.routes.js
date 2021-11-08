const MusicianController = require("../controllers/musician.controller");


module.exports = (app)=>{
    app.get("/api/musicians", MusicianController.findAllMusicians)
    app.post("/api/musicians", MusicianController.createNewMusician)
    app.get("/api/musicians/:id", MusicianController.findOneMusician)
    app.put("/api/musicians/:id", MusicianController.updateMusician)
    app.delete("/api/musicians/:id", MusicianController.deleteMusician)
}