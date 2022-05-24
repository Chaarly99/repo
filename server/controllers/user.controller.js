const db = require("../models");
const User = db.users;
// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "El contenido no puede estar vacío!" });
    return;
  }
  // Create a User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    passwd: req.body.passwd
  });
  
  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al crear el Usuario"
      });
    });
};
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algún error ha ocurrido al recoger los Usuarios."
        });
      });
};
 // Find a single User with an id
 // Find by another field => http://192.168.1.94:8080/api/users?email=carlosparro2010@gmail.com
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No encontrado un Usuario cuyo id sea: " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error recogiendo un Usuario con id=" + id });
      });
}; 
// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Los datos para actualizar no pueden estar vacíos!"
        });
      }
      const id = req.params.id;
      User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `No se puede actualizar un Usuario con id=${id}. Puede que no se encuentre el Usuario!`
            });
          } else res.send({ message: "Usuario fue actualizado con éxito." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error actualizando el Usuario con id=" + id
          });
        });
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Usuario.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No se puede borrar el Usuario con id=${id}. Puede que el usuario no se encuentre!`
          });
        } else {
          res.send({
            message: "Usuario fue borrado con éxito!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo borrar el Usuario con id=" + id
        });
      });
};
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    Usuario.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Usuarios fueron borrados con éxito!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algún error ha ocurrido al borrar todos los usuarios."
      });
    });
};
/* // Find all Users with filter
exports.findAllPublished = (req, res) => {
    Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}; */








/*create a new Tutorial: object.save()
find a Tutorial by id: findById(id)
retrieve all Tutorials: find()
update a Tutorial by id: findByIdAndUpdate(id, data)
remove a Tutorial: findByIdAndRemove(id)
remove all Tutorials: deleteMany()
find all Tutorials by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
*/