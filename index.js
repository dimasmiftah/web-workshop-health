const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const config = require('./config');
const routes = require('./routes/index.route');
const db = require('./database');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: 'supersecretkeyyoushouldnotcommittogithub',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

db.authenticate()
  .then(() => console.log('[DB] Connection has been established successfully.'))
  .catch((error) =>
    console.error('[DB] Unable to connect to the database:', error)
  );

db.sync({
  alter: true,
})
  .then(() => console.log('[DB] Database synced successfully.'))
  .catch((error) => console.error('[DB] Error:', error));

app.use('/', routes);

app.listen(config.port, () => {
  console.log('Server is running on port ' + config.port);
  console.log('Visit http://localhost:' + config.port + '/');
});
