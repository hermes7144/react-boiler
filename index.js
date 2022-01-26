// 익스프레스 모듈 가져오기
const express = require('express')
// 새로운 익스프레스 앱 만들기
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI , {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err))

app.get('/', (req, res) => {res.send('Hello Worldddd!')})

app.post('/register', (req, res) => {

  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  // 모델을 이용해서 인스턴스를 만든다.

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success: true
    })

  })
})

app.listen(port, () => {console.log(`Example app listening on port ${port}`)})