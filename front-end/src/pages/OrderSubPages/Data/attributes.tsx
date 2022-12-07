export interface order {
  orderCustomerName: String;
  orderTotPrice: Number;
  orderTimeAt: Date;
  orderItems: orderItem[];
  isCancled: Boolean;
  orderPickUpType: String;
  orderRequirements: String;
  orderState: String;
}

export interface orderItem {
  name: String;
  price: Number;
  count: Number;
  isOrderable: Boolean;
  tags: String[];
  beforeTags: String;
  options: optionItem[];
}

interface optionItem {
    title: String;
    count: Number;
}
 

// interface optionSection {
//   bigTitle: String;
//   options: optionItem[];
// };


const optionItem_A_1: optionItem[] =[{
    title: "공기밥",
    count: 4
},{
    title: "주먹밥",
    count: 1
},{
    title: "당면",
    count: 2
},{
    title: "김치",
    count: 1
}]


const optionItem_A_2: optionItem[] =[{
    title: "분모자",
    count: 2
},{
    title: "치즈",
    count: 1
},{
    title: "당면",
    count: 1
},{
    title: "단무지",
    count: 1
}]

const optionItem_B_1: optionItem[] =[{
    title: "김치",
    count: 2
},{
    title: "치즈",
    count: 1
},{
    title: "호피",
    count: 1
},{
    title: "잇힝",
    count: 1
}]

const optionItem_B_2: optionItem[] =[{
    title: "분모자",
    count: 2
},{
    title: "치즈",
    count: 1
},{
    title: "공기밥",
    count: 1
},{
    title: "단무지",
    count: 1
}]

const menu_1 = {
    name: "찜닭",
    price: 20000,
    count: 1,
    isOrderable: true,
    tags: ["대표"],
    beforeTags: "인기"   
}

const menu_2 = {
    name: "로제파스타",
    price: 20000,
    count: 2,
    isOrderable: true,
    tags: ["대표"],
    beforeTags: "인기",
}

const menu_3 = {
    name: "마약순대",
    price: 1000,
    count: 3,
    isOrderable: true,
    tags: ["대표"],
    beforeTags: "인기",
}



const orderItems_A: orderItem[] = [{
    ...menu_1,
    options: optionItem_A_1
},{
    ...menu_2,
    options: optionItem_A_2
}]

const orderItems_B: orderItem[] = [{
    ...menu_2,
    options: optionItem_B_1
},{
    ...menu_3,
    options: optionItem_A_2
}]
const orderItems_C: orderItem[] = [{
    ...menu_1,
    options: optionItem_B_1
},]
export const order_A: order = {
    orderCustomerName: "류현석",
    orderTotPrice: 44000,
    orderTimeAt: new Date('2021-12-12T18:30:01'),
    orderItems: orderItems_A,
    isCancled: false,
    orderPickUpType: "직접수령",
    orderRequirements: "천천히 조심해서 오세요",
    orderState: "주문대기중"
}

export const order_B: order = {
    orderCustomerName: "김건모",
    orderTotPrice: 30030,
    orderTimeAt: new Date('2021-12-12T18:30:01'),
    orderItems: orderItems_B,
    isCancled: false,
    orderPickUpType: "직접수령",
    orderRequirements: "천천히 조심해서 오세요",
    orderState: "주문대기중"
}

export const order_C: order = {
    orderCustomerName: "권강민",
    orderTotPrice: 40000,
    orderTimeAt: new Date('2021-12-12T18:30:01'),
    orderItems: orderItems_C,
    isCancled: false,
    orderPickUpType: "직접수령",
    orderRequirements: "천천히 조심해서 오세요",
    orderState: "주문대기중"
}

// const optionItem_A_1 =[{
//     title: "공기밥",
//     count: 4
// },{
//     title: "주먹밥",
//     count: 1
// },{
//     title: "당면",
//     count: 2
// },{
//     title: "김치",
//     count: 1
// }]

// const orderItem_A_1 = [{
//     name: "찜닭",
//     price: 20000,
//     count: 1,
//     isOrderable: true,
//     tags: ["대표"],
//     beforeTags: "인기",
//     options: optionItem_A_1
// }]


// const orderItem_A_2 = [{
//     name: "로제파스타",
//     price: 20000,
//     count: 2,
//     isOrderable: true,
//     tags: ["대표"],
//     beforeTags: "인기",
//     options: optionItem_A_1
// }]

// const order_A = {
//     orderCustomerName: "류현석",
//     orderTotPrice: 44000,
//     orderTimeAt: new Date('2021-12-12T18:30:01'),
//     orderItems: [orderItem_A_1, orderItem_A_2],
//     isCancled: false,
//     orderPickUpType: "직접수령",
//     orderRequirements: "천천히 조심해서 오세요",
//     orderState: "주문대기중"
//   }
