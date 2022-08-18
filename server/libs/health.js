

module.exports = app => {
app.get('/health', (req, res) => {
    //To verify the server is working correctly...
    //curl localhost:PORT/health -I
    res.status(204).send(); //204 No Content
});
}