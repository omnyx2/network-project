import { UsersTable } from "../components/Userlist.tsx";

import { FeaturesCard } from '../components/CardItem.tsx';
import { StatsControls } from "../components/Orderlists.tsx";
import { KakaoMap } from '../components/Maps/KakaoMap.tsx'

import React from "react";
import { Flex, Button, Box } from '@mantine/core';

const testImg = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnobita.me%2Fresources%2Favatar-from-url.86%2F&psig=AOvVaw2iwytExrFCOFwI69nVJN9F&ust=1667809545263000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIDZp-6QmfsCFQAAAAAdAAAAABAD"

interface UsersTableProps {
  data: { avatar: string; name: string; job: string; email: string; phone: string }[];
}

const data0= [
  {
    avatar: testImg, 
    name: "짜장면",
    job: "5000원",
    email: "jjajang maen",
    phone: "오늘 팔린 수량 100개"
  }, {
    avatar: testImg, 
    name: "짜장면",
    job: "5000원",
    email: "jjajang maen",
    phone: "오늘 팔린 수량 100개"
  }, {
    avatar: testImg, 
    name: "짜장면",
    job: "5000원",
    email: "jjajang maen",
    phone: "오늘 팔린 수량 100개"
  }, {
    avatar: testImg, 
    name: "짜장면",
    job: "5000원",
    email: "jjajang maen",
    phone: "오늘 팔린 수량 100개"
  }, {
    avatar: testImg, 
    name: "짜장면",
    job: "5000원",
    email: "jjajang maen",
    phone: "오늘 팔린 수량 100개"
  },
]

const data = {
   
}

function MainPage () {
  return (
    <>
    <Flex style={{width: "100wv", height: "100vh" }}>
    
      {/* <UsersTable data={data0} /> */}
      <Box style={{width: "auto"}}>
      <StatsControls />
      <StatsControls />

      </Box>
     
     
      {/* <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard /> */}
          <KakaoMap />
    </Flex>

     
   
    </>
    
  )
}


export default MainPage;
