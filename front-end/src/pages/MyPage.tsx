import { UsersTable } from "../components/Userlist.tsx";
import { DoubleNavbar } from "../components/SideNavBarType1.tsx";
import { FeaturesCard } from '../components/CardItem.tsx';
import { StatsControls } from "../components/Orderlists.tsx";
import { KakaoMap } from '../components/Maps/KakaoMap.tsx'

import { Flex, Button, Box } from '@mantine/core';
function MyPage () {
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
  
  
  export default MyPage;
  