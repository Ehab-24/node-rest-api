const speakerController = require('../controllers/speakerController');

routes = [
    {
        method: 'GET',
        url: '/api/speakers',
        handler: speakerController.getSpeakers
    },
    {
        method: 'GET',
        url: '/api/speakers/:id',
        handler: speakerController.getSingleSpeaker
    },
    {
        method: 'POST',
        url: '/api/speakers',
        handler: speakerController.createSpeaker
    },
    {
        method: 'PUT',
        url: '/api/speakers/:id',
        handler: speakerController.updateSpeaker
    },
    {
        method: 'DELETE',
        url: '/api/speakers/:id',
        handler: speakerController.deleteSpeaker
    }
];

module.exports = routes;