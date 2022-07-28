const express = require('express');
const { User } = require('./models');
const db = require('./models');

const app = express();

app.use(express.json());

const start = async() => {
    try {
        await db.sequelize.authenticate()
        await db.sequelize.sync();
        app.listen(8080, () => console.log('server listening on port 8080'));
    } catch (e) {
console.log(e);
    }
};
start();
// app.get('/questions', async (req, res, next) => {
//     try {
//         const channels = await db.Question.findAll();
//         console.log(channels);
//         res.json(channels);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).json(err);
//     }
// });


// app.get('/users', async (req, res, next) => {
//     try {
//         const channels = await User.findAll();
//         console.log(channels);
//         res.json(channels);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

