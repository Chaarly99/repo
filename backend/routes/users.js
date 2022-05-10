const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const passwd = req.body.passwd;

    const newUser = new User({name, email, passwd});

    newUser.save()
        .then(() => res.json('Usuario Añadido!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Usuario eliminado.'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.age = req.body.age;
            user.weight = req.body.weight;
            user.height = req.body.height;
            user.gender = req.body.gender;
            user.activity = req.body.activity;

            user.save()
                .then(() => res.json('Usuario actualizado!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;