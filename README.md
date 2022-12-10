# Excution
 There is three folders in here.
 1. backend
 2. front-end
 3. order-app

befor Excution, please install mysql and goto back-end/paying_backend and find 'src/setting_const.js' and fix currectly as you computer.
if you are running and one coputer you just type 'localhost:5000', and 'localhost: 8080'.
if running on server fix as you setted


First, Excution `yarn install` and `yarn start` backend.
Second, Excution `yarn install` and `yarn start` at front-end
third, Excution `yarn install` and `yarn start` at order-app and it will you 'do you want to use anthor port?' then do Y
" so second and third should working on 3000 and 3001 each.

And now open the each folders and open src folders again and there will be configs.js
so you should change the ip as your server (5000 is for http api) (8080 is for socket io)

# Running
We have two main pages in ths project
First is http://localhost:3000/ , the management order page for franchise manager
Second one is http://localhost:3001/,  the order page for user

Our order process run py this step
1. go to web page http://localhost:3001/ 
    put the number what you want to order
    press "담기" button after you select.
    press "주문" button after you select and press all "담기" button want to order

2. See the web page http://localhost:3000/order/state_all
    if you did process 1(press button "주문"), there would be an real-time alram on this page.
    after that alarm, new order added the list automatically (no need to F5)

3. Let's check the web page http://localhost:3000/order/state_all
    3.1 if you press "상세보기", then the detail information of that order on the right of window
    3.2 you can change the state of order by press "주문 대기중", "조리 시작", 조리 완료" 
    3.3 on the left menu, you can see "주문 전체창", "주문 접수 대기", "조리 중", "주문 완료", "오늘 주문 내역" 
    3.3.1 "주문 전체 창" shows all orders
    3.3.2 depends of the state of order, you can see only on selected state order by press menu "주문 접수 대기", "조리 중", "주문 완료"
    3.3.3 "오늘 주문 내역" is not implemented.


# Dummy Data

For convience we made a Dummy Data for this project you can easily use make Dummy Data. Go to backend/dummy_data and open the folders and fix url and send data to server
you just can push data with bellow command
```
yarn install
node index.js
```

# For DB
You can use Mysql or Postgres both. but when you use postgres in backend/paying_backend `yarn add pg` will require.
Thanks :) hope you enjoy our server

