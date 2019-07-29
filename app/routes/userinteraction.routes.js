module.exports = (app) => {
    const userInteraction = require('../controllers/userintearction.controller');

    app.post('/userinteraction', userInteraction.create);
}