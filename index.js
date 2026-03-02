const { Galaxy, Star, Planet } = require('./models');

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

app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    res.locals.activeSegment = req.path.split('/')[1] || '';
    next();
});

app.get('/', async (req, res) => {
  try {
    const galaxies = await Galaxy.findAll({ raw: true });
    const stars = await Star.findAll({ raw: true });
    const planets = await Planet.findAll({ raw: true });

    res.render('dashboard', { 
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

app.use(`/planets`, routers.planet)
app.use(`/stars`, routers.star)
app.use(`/galaxies`, routers.galaxy)

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

module.exports = app;
