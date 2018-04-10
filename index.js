const express = require('express');
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');
require('./models/Invite');

mongoose.connect(keys.mongoURI);

const app = express();


app.use(bodyParser.json());

app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + '/emailTemplates/images'));

require('./routes/authRoutes')(app);
require('./routes/inviteRoutes')(app);


if (process.env.NODE_ENV === 'production') {
  //express will serve production assets
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,
      'client', 'build', 'index.html'))
  });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('Express port: ', this.address().port);
});
