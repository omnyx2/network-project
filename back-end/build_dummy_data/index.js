const axios = require('axios');
const SERVER_URL = 'http://localhost:8080/'
const USER_DUMMY_DATA = [
    {
        "id" : 1,
        "name" : "류현석"
    },
    {
        "id" : 2,
        "name" : "two" }, {
        "id" : 3,
        "name" : "three"
    },
    {
        "id" : 4,
        "name" : "four"
    },
    {
        "id" : 5,
        "name" : "five"
    }
]

const FRANCCHI_DUMMY_DATA = [{
    "id" :1,
    "name" : "치킨",
    "products":[
        {
            "id" : 11,
            "name" : "후라이드",
            "price" : 10000,
            "options": [{
                "title": "공기밥",
                "price" : 1000
            },{
                "title": "김치",
                "price" : 1000
            }]
        },
        {
            "id" : 12,
            "name" : "양양념",
            "price" : 10000,
            "options": [{
                "title": "공기밥",
                "price" : 1000
            },{
                "title": "김치",
                "price" : 1000
            }]
        }
        
    ]
},
{
    "id" :2,
    "name" : "피자",
    "products":[
        {
            "id" : 21,
            "name" : "불고기피자",
            "price" : 20000,
            "options": [{
                "title": "피클",
                "price" : 1000
            },{
                "title": "소스스",
                "price" : 1000
            }]
        },
        {
            "id" : 22,
            "name" : "파인애플피자",
            "price" : 20000,
            "options": [{
                "title": "피클",
                "price" : 1000
            }]
        }
        
    ]
},
{
    "id" :3,
    "name" : "중국집",
    "products":[
        {
            "id" : 31,
            "name" : "짜장면",
            "price" : 8000,
            "options": [{
                "title": "곱배기기",
                "price" : 1000
            },{
                "title": "단무지지",
                "price" : 1000
            }]
        },
        {
            "id" : 32,
            "name" : "짬뽕뽕",
            "price" : 9000,
            "options": [{
                "title": "곱배기",
                "price" : 1000
            },{
                "title": "단무지지",
                "price" : 1000
            }]
        }
        
    ]
}]

const instance = axios.create({
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}})

instance.post(`${SERVER_URL}francchi/create`, FRANCCHI_DUMMY_DATA)
  .then(function (response) {
    console.log(response.status);
  })
  .catch(function (error) {
    console.log(error.message);
  });

instance.post(`${SERVER_URL}users/create`, USER_DUMMY_DATA)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

