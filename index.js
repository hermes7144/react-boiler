// 익스프레스 모듈 가져오기
const express = require('express')
// 새로운 익스프레스 앱 만들기
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://boiler:boiler@movie-clone.7nii5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})