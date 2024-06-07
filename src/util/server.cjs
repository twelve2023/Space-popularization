
const express = require('express')
const mysql = require('mysql2')
// const cors=require('cors')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
// app.use(cors());

const db = mysql.createPool({
  host: 'localhost',
  user: "root",
  password: "Kong0824",
  database: "register",
  port: '3307'
})

app.options('/login', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Content-Type, xCors");
  res.status(200).send();
});

app.options('/register', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Content-Type, xCors");
  res.status(200).send();
});


app.post('/login', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Content-Type, xCors");
  res.header('Content-Type', 'application/json')
  const obj = req.body;
  let account = obj.account
  let password = obj.password
  let last_visited_time = new Date().toISOString();
  db.query('select * from user1 where account=? and password=?', [account, password], (err, results) => {
    if (err) {
      results = {
        warn: 'error',
        message: '获取数据库失败！'
      },
        res.send(JSON.stringify(results))
    } else {
      // console.log(JSON.stringify(results));
      // res.send(JSON.stringify(results))
      // res.send(1111)
      if (JSON.stringify(results).length > 0) {
        res.send(JSON.stringify(results))
      }
    }
  })

  db.query( `UPDATE user1 SET last_visited_time = '${last_visited_time}' WHERE account = '${account}'`)
});


app.post('/register', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Content-Type, xCors");
  res.header('Content-Type', 'application/json')
  const objs = req.body;
  // console.log(objs);
  // console.log(req.url);
  let account = objs.account
  let userName = objs.userName
  let password = objs.password
  let last_visited_time = new Date().toISOString();


  //  检查用户是否已存在
  db.query('select * from user1 where account=?', [account], (err, results) => {
    if (err) {
      results = {
        warn: 'error',
        message: '获取数据库失败！'
      },
        res.send(JSON.stringify(results))
    } else {
      console.log(results.length);
      if (results.length > 0) {
        res.send({insertId:0})
      } else {
        //用户不存在，将数据插入数据库
        db.query('insert into user1 value (?,?,?,?,?)', [0, account, userName, password,last_visited_time], (err, results) => {
          if (err) {
            results = {
              warn: 'error',
              message: '获取数据库失败！'
            },
              res.send(JSON.stringify(results))
          } else {
            console.log('111');
            if (JSON.stringify(results).length > 0) {
              res.send(JSON.stringify(results))
              console.log(results);
            }
          }
        })
      }
    }
  })

});

app.listen(8080, () => {
  console.log("服务器已在8080端口启动",)
})