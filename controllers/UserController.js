const Data = require('../models/Usermodel');

const getdata = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ "message": err.message });
    }
}

const createdata = async (req, res) => {
    const { name, age, email, marks } = req.body;
    const data = new Data({ name, age, email, marks });
    try {
        const saveddata = await data.save();
        res.status(201).json({ 'data saved successfully': saveddata });
    } catch (err) {
        res.status(400).json({ 'error': err.message })
    }
}

const updatedata = async (req, res) => {
    const { id } = req.params;
    const { name, age, email, marks } = req.body;
    try {
        const update = await Data.findByIdAndUpdate(id,
            { name, age, email, marks },
            { new: true }
        );
        res.status(201).json({'data updates successfully':  update});
    } catch (error) {
        res.status(400).json({ 'message': error.message });
    }
}

const deletedata = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Data.findByIdAndDelete(id);

        if (!data) {
            res.status(200).json('data not found for this particular id');
        }

        res.status(201).json('data deleted successfully');

    } catch (err) {
        res.status(400).json('error', err.message);
    }
}

module.exports = { deletedata, createdata, updatedata, getdata };