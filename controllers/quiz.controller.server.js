const quizzesService = require('../services/quiz.service.server')
module.exports = function (app) {
    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))
    app.get('/api/quizzes/:qzid', (req, res) =>
        quizzesService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))
}

// const quizzesService = require('../services/quiz.service.server')

// module.exports = function (app) {

//     app.get('/api/quizzes', (req, res) =>
//         res.json(quizzesService
//             .findAllQuizzes()))

//     app.get('/api/quizzes/:qzid', (req, res) =>
//         res.json(quizzesService
//             .findQuizById(req.params['qzid']))
//     )
// }