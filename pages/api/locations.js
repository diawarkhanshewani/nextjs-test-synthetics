const fs = require('fs');
const path = require('path');

export default function (req, res) {
    const json = fs.readFileSync(path.resolve('../../data/json/locations.json'), 'utf8');
    return res.status(200).json(json);
}