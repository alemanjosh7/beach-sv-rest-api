const express = require('express')
const cors = require('cors'); 
const app = express();
const db = require("./models");
const bodyparser = require('body-parser'); 
const port = process.env.PORT || 3000

//middlewares
app.use(cors())
app.use(bodyparser.json()); 
//parser responses
app.use(bodyparser.urlencoded({     
    extended: true
}));

const profile_routes = require("./routes/profile_routes");
app.use('/api/profile', profile_routes);

const roles_routes = require("./routes/roles_routes");
app.use('/api/roles', roles_routes);

const user_routers = require("./routes/user_routes");
app.use('/api/users', user_routers);  


//init app
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listen at: http://localhost:${port}`);
    });
});
//test2

