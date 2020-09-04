module.exports= {
    mongo:process.env.MONGO || 'mongodb://localhost:27017/myapp',
    port:process.env.PORT || 8080,
}
