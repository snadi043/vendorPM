
module.exports = app => {
app.post('/ui/getApiRenderResponseDisplay', (req, res) => {
    const players = req.body;

    res.set('Content-Type', 'text/html');
    const list = (players.map((player, i) => {
        return `<li key=${i}> \
            <ul> \
              <li class="${player.name}"}>${player.name}</li> \
              <li>${player.age}</li> \
              <li>${player.job}</li> \
              <li>${player.salary}</li> \
            </ul> \
          </li>`;
      }));
      res.send(list);
})
}