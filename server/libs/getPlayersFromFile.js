const fs = require('fs').promises;

module.exports = app => { 
app.get('/api/getPlayersFromFile/:filename', async (req, res) => {
    res.json(await fs.readFile(req.params.filename, 'utf-8'));
})
}
