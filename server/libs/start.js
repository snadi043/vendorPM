const PORT = 3030; 

module.exports = app => {
    app.listen(PORT, function () {
        console.log(`Server running..., started on ${PORT}`)
    })
}

