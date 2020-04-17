const quizzesService = require('../services/quiz.service.server')

module.exports = function (app) {

    app.get('/api/quizzes', (req, res) =>
        res.json(quizzesService
            .findAllQuizzes()))

    app.get('/api/quizzes/:qzid', (req, res) =>
        res.json(quizzesService
            .findQuizById(req.params['qzid']))
    )
}