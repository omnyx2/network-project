import { KakaoMap } from "../../components/Maps/KakaoMap.tsx";
import GridLayout_1_1_LeftBigger from "../../Layout/GridLayout_1_1_LeftBigger";
import { UsersTable } from "../../components/Userlist.tsx";
import { DragAndDropHeadList } from '../../components/DragAndDrop/DragAndDropHeadList.tsx';
import { order_A, order_B, order_C} from './Data/attributes.tsx'
import React, { useEffect, useState } from "react";
import { useComponentDefaultProps } from "@mantine/core";
 

const newData = [

  {
    "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    "name": "Henry Silkeater",
    "job": "Designer",
    "orderBrief": ["henry@silkeater.io"],
    "phone": "+44 (901) 384 88 34"
  },
  {
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    "name": "Bill Horsefighter",
    "job": "Designer",
    "orderBrief": ["henry@silkeater.io"],
    "phone": "+44 (667) 341 45 22"
  },
  {
    "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    "name": "Jeremy Footviewer",
    "job": "Manager",
    "orderBrief": ["henry@silkeater.io"],
    "phone": "+44 (881) 245 65 65"
  }
]
const DetailedRecipe = ({ selectedOrderItem, handleOnChangeOrderState }) => {
  const options = (_options) => {
    return _options.map((item) =>(
      <div>
        {item.title} {item.count} 개
      </div>
    ))
  }

  const orderMenuItems = selectedOrderItem.orderItems.map((item, idx) => (
   <div>
    {item.name}
    {item.price}
    { options(item.options) }
    {item.count}
   </div>
  ))
  return(
    <div style={{width: 300, height: '100vh', borderLeft: '1px solid black'}}>
      { selectedOrderItem.orderCustomerName }
      { selectedOrderItem.orderTotPrice }
      {/* { selectedOrderItem.orderTimeAt } */}
      { orderMenuItems }
      { selectedOrderItem.isCancled }
      { selectedOrderItem.orderPickUpType }
      { selectedOrderItem.orderRequirements }
    </div>
  )
}

function OrderStateCookingPage() {
  const orders = [
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}, 
    {...order_A}, {...order_B}, {...order_C}]
  const [selectedOrder, setSelectedOrder] = useState(order_A)
  const [totOrders, setTotOrders ] = useState(orders)
   
  const handleOnChangeOrderState = (idx, key, valueTypeIdx, valueKey) => {
    const changAbleValueList = [
      {
        orderWaiting: "주문 대기",
        orderCooking: "조리 시작",
        orderDone: "조리 완료",
        orderCandle: "주문 취소"
      } 
    ]
    let newData = [...totOrders]
    newData[idx][key] = changAbleValueList[valueTypeIdx][valueKey]
    setTotOrders(newData)
  }
  
  const handleSelectedDetailedRecipe = (idx) => {
    console.log(idx)
    setSelectedOrder(orders[idx])
  }

  const handleOnUpdate = () => {

  }
 
 
  
  return (
    <div style={{ width: "100%", height: "100%" }}>
      
   
      <GridLayout_1_1_LeftBigger 
        CompOne={
          <UsersTable 
            data={totOrders} 
            StateChangingButton={<>a</>} 
            handleOnChangeOrderState={handleOnChangeOrderState}
            handleSelectedDetailedRecipe ={ handleSelectedDetailedRecipe} 
          />}
        CompTwo={
          <DetailedRecipe 
            selectedOrderItem={selectedOrder}
            
          />} 
      />
    </div>
  );
}

export default OrderStateCookingPage;
