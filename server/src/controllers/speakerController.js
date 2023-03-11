const boom = require('boom');
const Speaker = require('../models/Speaker');

exports.createSpeaker = async (req, _) => {
    try {
        const speaker = new Speaker(req.body);
        return speaker.save();
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.getSpeakers = async (_, __) => {
    try {
        const speakers = await Speaker.find();
        return speakers;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.getSingleSpeaker = async (req, _) => {
    try {
        const id = req.params.id;
        const speaker = await Speaker.findById(id);
        return speaker;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.updateSpeaker = async (req, _) => {
    try {
        const id = req.params.id;
        const { ...updateData } = req.body;
        const newSpeaker = await Speaker.findByIdAndUpdate(id, updateData, {new:true});
    }
    catch(err) {
        throw boom.boomify(err);
    }
};

exports.deleteSpeaker = async (req, _) => {
    try {
        const id = req.params.id;
        const speaker = await Speaker.findByIdAndRemove(id);
        return speaker;
    } catch (err) {
        throw boom.boomify(err);
    }
};