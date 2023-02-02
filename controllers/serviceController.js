const Service = require('../models/Service');

exports.create = async (req, res) => {
    const { name, description, category } = req.body;
    try {
        let service = new Service({
            name,
            description,
            category
        });
        await service.save();
        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAll = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
