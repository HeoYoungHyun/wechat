const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  
  const express = require('request');
  request.get(
    {url:'http://localhost:8800/wechat',
    headers : {"content-type":"application/json"}
    },
    function(error,res,body){
        let data = JSON.parse(body);
        if(!error && res.statusCode==200){
            console.log('GET서버로부터 수신했음!');
            console.log("이름:" + data.name);
            console.log("나이:" + data.age);
            console.log("주소:" + data.addr);
            console.log("연락처:"+data.tel);
        }
    }
);

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime
}
