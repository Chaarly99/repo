const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv')
const mg = require('mailgun-js');

dotenv.config();

const mailgun = () =>{
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  })
}

const app = express();

var corsOptions = {
  origin: "http://192.168.1.94:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to cparro application." });
});

app.post('/api/email', (req, res) => {
  const { email, subject, comments } = req.body;
  mailgun().messages().send({
    from: `${email}`,
    to: `Carlos Parro <carlosparro2010@gmail.com>`,
    subject: `${subject}`,
    html: `<p>${comments}</p>`, 
  },
  (error, body) => {
    if(error){
      console.log(error);
      res.status(500).send({ comments: 'Error al enviar los comentarios' });
    }else{
      console.log(body);
      res.send({ comments: 'Comentarios enviados. Gracias por contactar con nosotros.'})
    }
  }
  )
})

require("./routes/user-router")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});