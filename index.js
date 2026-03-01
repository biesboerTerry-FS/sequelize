const { Galaxy, Star, Planet } = require('./models');

// Load in our Express framework
const express = require(`express`)
const path = require('path');
const methodOverride = require('method-override');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


const routers = require('./routers/index.js')

app.get('/', async (req, res) => {
  try {
    const galaxies = await Galaxy.findAll();
    const stars = await Star.findAll();
    const planets = await Planet.findAll();

    res.render('index', { 
      galaxies, 
      stars, 
      planets,
      title: 'Star Tracker Dashboard' 
    });
  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).send("Error loading dashboard data");
  }
});

app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    res.locals.activeSegment = req.path.split('/')[1] || '';
    next();
});

// app.get('/', (req, res) => {
//   // res.render('index', { title: 'Welcome to Star Tracker Library' });
//   // res
//   //   .status(200)
//   //   .send('Welcome to Star Tracker Library')
// })

// Register our RESTful routers with our "app"
app.use(`/planets`, routers.planet)
app.use(`/stars`, routers.star)
app.use(`/galaxies`, routers.galaxy)

// Set our app to listen on port 3000
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;

const getDashboard = async (req, res) => {
    const galaxies = await Galaxy.findAll();
    const stars = await Star.findAll();
    const planets = await Planet.findAll();
    res.render('index', { galaxies, stars, planets });
};