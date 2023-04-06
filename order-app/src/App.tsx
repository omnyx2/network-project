import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./menu.css";
import { Text, Input, Flex, Button, Container } from "@mantine/core";
import axios from "axios";
import { SERVER_URL } from "./configs";
import { useQuery, useMutation } from "react-query";

import { francchiMenusExample } from "./attributes";
const tempData = {
  user_id: 1,
  francchi_id: 2,
  orderCustomerName: "류현석",
  orderTotPrice: 44000,
  orderTimeAt: 0,
  isCancled: false,
  orderPickUpType: "직접수령",
  orderRequirements: "천천히 조심해서 오세요",
  orderState: "주문대기중",
  orderItems: [
    {
      name: "찜닭",
      price: 20000,
      count: 1,
      isOrderable: true,
      tags: "대표",
      beforeTags: "인기",
      options: [
        {
          title: "공기밥",
          count: 4,
        },
        {
          title: "주먹밥",
          count: 1,
        },
        {
          title: "당면",
          count: 2,
        },
        {
          title: "김치",
          count: 1,
        },
      ],
    },
    {
      name: "로제파스타",
      price: 20000,
      count: 2,
      isOrderable: true,
      tags: "대표",
      beforeTags: "인기",
      options: [
        {
          title: "분모자",
          count: 2,
        },
        {
          title: "치즈",
          count: 1,
        },
        {
          title: "당면",
          count: 1,
        },
        {
          title: "단무지",
          count: 1,
        },
      ],
    },
  ],
};

function getMenus(url: string) {
  return axios({
    method: "get",
    url,
    timeout: 100,
    // 요청 헤더 설정
    responseType: "json",
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  }).then(function (response) {
    return response.data;
  });
}

async function saveMenus(url: any, data: any) {
  return await axios({
    method: "post",
    url,
    headers: { "Content-Type": "application/json" }, // 요청 헤더 설정
    responseType: "json",
    data,
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  }).then(function (response) {
    return response.data;
  });
}

function sumTotMenuPrice(menuItems: any[]) {
  let totPrice = 0;

  menuItems.forEach((e: any) => {
    let onePrice = 0;
    onePrice += e.price;
    e.options.forEach((option: any) => {
      onePrice += option.price * option.count;
    });
    //옵션을 포함하여 곱해서 값을 책정해야하기 떄문
    onePrice *= e.count;
    totPrice += onePrice;
  });

  return totPrice;
}

function App() {
  const [menusData, setMenusData] = useState<any[]>([]);
  const [orderMenuItemList, setOrderMenuItemList] = useState<any[]>([]);
  const [savedOrders, setSavedOrders] = useState<any[]>([]);

  const [focused, setFocused] = useState(false);
  const server_url = SERVER_URL;
  const francchi_id = 2;
  const url = `${server_url}/product/francchi/${francchi_id}`;
  const url_order = `${server_url}/order/${francchi_id}`;
  useEffect(() => {}, [menusData]);

  const { isLoading, isError, data, error } = useQuery(
    "getMenus",
    () => getMenus(url),
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data) => {
        // 성공시 호출
        const handleMenu = data?.data?.map((e: any, idx: any) => {
          return {
            id: e.id,
            name: e.name,
            price: e.price,
            count: 0,
            options: e.options.map((option: any, idx: any) => {
              return {
                id: option.id,
                title: option.title,
                price: option.price,
                count: 0,
              };
            }),
          };
        });

        setOrderMenuItemList([...handleMenu]);
        setMenusData([...data.data]);
      },
      onError: (e: any) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)

        const handleMenu = francchiMenusExample.map((e: any, idx: any) => {
          return {
            id: e.id,
            name: e.name,
            price: e.price,
            count: 0,
            options: e.options.map((option: any, idx: any) => {
              return {
                id: option.id,
                title: option.title,
                price: option.price,
                count: 0,
              };
            }),
          };
        });

        setOrderMenuItemList([...handleMenu]);
        setMenusData([...francchiMenusExample]);
        console.log(e?.message);
      },
    }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    //  return <span>Error: {error.message}</span>;
  }

  const user_id = 2;

  const orderCustomerName = "류현석";

  //   "user_id" : 1,
  //   "francchi_id" : 2,
  //   "orderCustomerName": "류현석",
  //   "orderTotPrice": 44000,
  //   "orderTimeAt": 0,
  //   "isCancled": false,
  //   "orderPickUpType": "직접수령",
  //   "orderRequirements": "천천히 조심해서 오세요",
  //   "orderState": "주문대기중",
  //   "orderItems": [

  const handleOrderOptionOfMenu = (menuId: any, optionId: any, count: any) => {
    let numCount = parseInt(count);
    console.log(numCount);
    if (
      numCount <= 0 /* 추가 제약을 여기에 걸어서 반드시 주문하게 만들 수 잇음 */
    ) {
      console.log("Order Count Should bigger then 0, count:", numCount);
    }
    if (numCount > 0) {
      orderMenuItemList[menuId].options[optionId].count = numCount;
      setOrderMenuItemList([...orderMenuItemList]);
    }
  };

  const handleOrderMenu = (menuId: any, count: any) => {
    let numCount = parseInt(count);
    if (
      numCount <= 0 /* 추가 제약을 여기에 걸어서 반드시 주문하게 만들 수 잇음 */
    ) {
      console.log("Order Count Should bigger then 0, count:", numCount);
    }
    if (numCount > 0) {
      orderMenuItemList[menuId].count = numCount;
      setOrderMenuItemList([...orderMenuItemList]);
    }
  };

  const handleSaveOrder = async (menuId: any) => {
    let numCount = orderMenuItemList[menuId].count;
    console.log(numCount);
    if (numCount <= 0) {
      console.log("Order Count Should bigger then 0, count:", numCount);
    }
    if (numCount > 0) {
      savedOrders.push({ ...orderMenuItemList[menuId] });
      await setSavedOrders([...savedOrders]);
      console.log(savedOrders);
    }
  };

  const sendOrder = async () => {
    if (savedOrders.length === 0) {
      console.log("Error No data Yet! ", savedOrders);
    }
    if (savedOrders.length !== 0) {
      let serializer = {
        user_id: 1,
        francchi_id: 2,
        orderCustomerName: "류현석",
        orderTotPrice: sumTotMenuPrice(savedOrders),
        orderTimeAt: new Date().toISOString(),
        orderPickUpType: "직접수령",
        orderItems: savedOrders,
      };
      console.log(serializer);
      await saveMenus(url_order, serializer);
    }
  };

  const option = (item: any, handleOrderOptionOfMenu: any) => {
    return item.options?.map((e: any, idx: any) => {
      return (
        <div className="option-container">
          <div className="block-container">
            <Flex>
              <Text fz="md" fw={800}>
                옵션 {e.title}:
              </Text>
              <Text fz="md" fw={800}>
                {e.price}원
              </Text>
            </Flex>
            <div className="input-size-container">
              <Input
                placeholder="0"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e: any) =>
                  handleOrderOptionOfMenu(idx, e.target.value)
                }
              />
            </div>
          </div>
        </div>
      );
    });
  };

  const UserInfoForm = () => {
    return (
      <>
        <div className="menu-item">
          <div className="option-container">
            <div className="block-container">
              <Text fz="md" fw={700}>
                연락처
              </Text>
              <Input
                placeholder="0"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={() => {}}
              />
              <Button>인증</Button>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="option-container">
            <div className="block-container">
              <Text fz="md" fw={700}>
                성함
              </Text>
              <Input
                placeholder="홍길동"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const menuRenderer = menusData?.map((item, idx) => {
    return (
      <div className="menu-item">
        <div className="option-container">
          <div className="block-container">
            <Text fz="md" fw={900}>
              메인 메뉴: {item?.name}
            </Text>
            <Text fz="md" fw={900}>
              {item?.price} 원
            </Text>
          </div>
          <Text>{item?.isOrderable}</Text>
          <Text>{item?.tags}</Text>
          <Text>{item?.beforeTags}</Text>
        </div>
        {option(item, (optionId: any, count: any) =>
          handleOrderOptionOfMenu(idx, optionId, count)
        )}
        <div className="shopping-tool-container">
          <div className="shopping-num-container">
            <Text fz="md" fw={700}>
              개수
            </Text>

            <Input
              placeholder="0"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e: any) => handleOrderMenu(idx, e.target.value)}
            />
          </div>
          <div className="shopping-order-container">
            <Container>
              <Button onClick={() => handleSaveOrder(idx)}>담기</Button>
            </Container>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="back-color-container">
      <UserInfoForm />
      {menuRenderer}
      <div className="order-send-container">
        <Button fullWidth size="md" onClick={() => sendOrder()}>
          주문
        </Button>
      </div>
    </div>
  );
}

export default App;

//"name": "찜닭",
//       "price": 20000,
//       "count": 1,
//       "isOrderable": true,
//       "tags": "대표",
//       "beforeTags": "인기"   ,
//       "options": [{
//               "title": "공기밥",
//               "count": 4
//           },{
//               "title": "주먹밥",
//               "count": 1
//           },{
//               "title": "당면",
//               "count": 2
//           },{
//               "title": "김치",
//               "count": 1
//           }]
//       },
