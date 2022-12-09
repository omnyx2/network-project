import { KakaoMap } from "../../components/Maps/KakaoMap.tsx";
import GridLayout_1_1_LeftBigger from "../../Layout/GridLayout_1_1_LeftBigger";
import { UsersTable } from "../../components/Userlist.tsx";
import { DragAndDropHeadList } from '../../components/DragAndDrop/DragAndDropHeadList.tsx';
import { orderDataExam } from './Data/attributes.tsx'
import { IconWifiOff } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useComponentDefaultProps } from "@mantine/core";
import axios from '../../axios'
import { useRecoilState } from "recoil";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ShopMainDataRecoil } from '../../recoils/ShopMainDataRecoil.tsx';
import { OrderAllDataRecoil } from  '../../recoils/ShopOrderDataRecoil.tsx';
import { Loader, Text } from '@mantine/core';

const DetailedRecipe = ({ selectedOrderItem, handleOnChangeOrderState }) => {
  const options = (_options) => {
    return _options?.map((item) =>(
      <div>
        {item?.title} {item?.count} 개
      </div>
    ))
  }
  console.log(selectedOrderItem)
  const orderMenuItems = selectedOrderItem.orderItems?.map((item, idx) => (
   <div>
    {item.name}
    {item.price}
    { options(item?.options) }
    {item?.count}
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
  
  const [selectedOrder, setSelectedOrder] = useState({})
  const [orderAllData, setOrderAllData ] = useRecoilState(OrderAllDataRecoil)
  const [mainData, setMainData] = useRecoilState(ShopMainDataRecoil)

  // Access the client
  const queryClient = useQueryClient()
  // Queries
  const { isLoading, isError, data, error } = useQuery('ordersList', () => axios.get(`order/francchi/${mainData.francchiId}`),{
    onSuccess: (response) => {
      console.log(response.data.data)
      let newData = response.data.data?.filter(e => e.orderState === "조리 시작")
      setOrderAllData(newData)
      // console.log(response.data.data)
    }});
  
  // Mutations
  const mutations = useMutation( newData => {
      const { orderId, idx, key, valueTypeIdx, valueKey, data } = newData
      // 옵션 변경식 사용되는 문자열들 
      const changAbleValueList = [
        {
          orderWaiting: "주문 대기",
          orderCooking: "조리 시작",
          orderDone: "조리 완료",
          orderCandle: "주문 취소"
        } 
      ]
   
      const copyData = JSON.parse(JSON.stringify(data));
      copyData[idx][key] = changAbleValueList[valueTypeIdx][valueKey]
      return axios.post(`order/post/${orderId}`, copyData[idx]);
    }, {
      onSuccess: (data) => {
        queryClient.invalidateQueries('ordersList')
    },
  });
 
  const handleOnChangeOrderState = (idx, key, valueTypeIdx, valueKey) => {
    const changAbleValueList = [
      {
        orderWaiting: "주문 대기",
        orderCooking: "조리 시작",
        orderDone: "조리 완료",
        orderCandle: "주문 취소"
      } 
    ]
    // let newData = [...data]
    // newData[idx][key] = changAbleValueList[valueTypeIdx][valueKey]
    // setTotOrders(newData)
  }
  
  const handleSelectedDetailedRecipe = (idx) => {
    // console.log(idx)
    setSelectedOrder(orderAllData[idx])
  }

  const handleOnUpdate = () => {

  }
 
  if (isLoading) {
    return (
      <div style={{ width : '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
      <Loader variant="dots" /></div>
    ) 
  }

  if (isError) {
    return (
      <div style={{ width : '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <IconWifiOff size={100}></IconWifiOff>
        <Text fz={'md'} fw={500}> [{error.status}Error!]: {error.message}</Text>
      </div>
    );
  }

  
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <GridLayout_1_1_LeftBigger 
        CompOne={
          <UsersTable 
            data={orderAllData} 
            StateChangingButton={<>a</>} 
            handleOnChangeOrderState={ mutations }
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
