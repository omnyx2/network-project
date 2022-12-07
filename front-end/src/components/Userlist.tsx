import {
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    ActionIcon,
    Anchor,
    ScrollArea,
    useMantineTheme,
    createStyles,
    Switch
  } from '@mantine/core';
  import { IconPencil, IconTrash, IconHelicopter, IconGrill, IconCircleCheck, IconAlarm, IconAlphabetLatin, IconArticle } from '@tabler/icons';
import React, {useEffect, useState} from 'react';
import { order } from '../pages/OrderSubPages/Data/attributes.tsx';


const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface UsersTableProps {
  data: { avatar: string; name: string; job: string; email: string; phone: string }[];
}

const jobColors: Record<string, string> = {
  engineer: 'blue',
  manager: 'cyan',
  designer: 'pink',
};
 


const stringSets = {
  timeString: (item) => {  
    const timeTemp = new Date(item);
    console.log(item)
    return `${timeTemp?.getHours()}:${timeTemp?.getMinutes()}`; },
  orderItemString: (item) => `${item.orderItems[0]?.name} ${ item.orderItems.length > 1 ? '외'+ item.orderItems.length + '건' : ''}`,
  priceTotSets: (item) => `${item}`
}

const orderstateColors = {
  "주문 대기": 'black',
  "조리 시작": 'cyan',
  "조리 완료": 'pink',
}
 

function SwitchToggle({handler}) {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        onChange = {() => handler()}
        color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
        onLabel={<IconAlphabetLatin size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
        offLabel={<IconArticle size={16} stroke={2.5} color={theme.colors.blue[6]} />}
      />
    </Group>
  );
}

export function UsersTable({ 
  data, 
  StateChangingButton,
  handleOnChangeOrderState,
  handleSelectedDetailedRecipe}) {

  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [textOrIconBool, setTextOrIcon ] = useState(true);
  const workInfo = [
    {
      text: "월",
      type: 1,
      isClicked: false,
    }
  ]
  const handleTextOrIcon = () => {
    setTextOrIcon(!textOrIconBool);
  }

  const theme = useMantineTheme();
 
  const showTextOrIcon = (TextComponent, IconComponent) => {
    let returnComp;
    
    if(textOrIconBool) {
       returnComp = (
        <Text size={9} color="dimmed">
          { TextComponent }
        </Text>
    )}

    if(!textOrIconBool) { returnComp = IconComponent }
    
    return returnComp       
  }
  

  const rows = data?.map((item, idx) => (
    <tr key={item.orderCustomerName} style={{width:'100%'}}>
      <td>
        <Group spacing="sm">
          {/* <Avatar size={30} src={item.avatar} radius={30} /> */}
          <Text size="sm" weight={500}>
            { stringSets.timeString(item.orderTimeAt) } 
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          // color={jobColors[item.job.toLowerCase()]}
          color={'blue'}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        >
          { stringSets.orderItemString(item) }
        </Badge>
      </td>
      <td>
        <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>
          {item?.orderTotPrice } 원
        </Anchor> 
      </td>
      <td>
        <Text size="sm" color={ orderstateColors[item.orderState]}>
          {item.orderState}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="left">
          <ActionIcon onClick={() => handleSelectedDetailedRecipe(idx)}> 
            { showTextOrIcon( 
              "상세 보기", 
              <IconArticle size={16} stroke={1.5} 
            />)}
          </ActionIcon>
          <ActionIcon onClick={() => 
            handleOnChangeOrderState.mutate({
              orderId: item.id, 
              idx, 
              key: "orderState", 
              valueTypeIdx: 0, 
              valueKey: "orderWaiting",  
              data
              })}>
            {/* <IconPencil size={16} stroke={1.5} /> */}
            { showTextOrIcon( 
              "주문 대기중", 
              <IconAlarm size={16} stroke={1.5} 
            />)}
          </ActionIcon >
          <ActionIcon color="red" onClick={() => handleOnChangeOrderState.mutate({
              orderId: item.id, 
              idx, 
              key: "orderState", 
              valueTypeIdx: 0, 
              valueKey: "orderCooking",  
              data
              })}>
            { 
              showTextOrIcon( 
                "조리 시작", 
                <IconGrill size={16} stroke={1.5}/>
              )
            }
          </ActionIcon >
          <ActionIcon color="red" onClick={() => handleOnChangeOrderState.mutate({
            orderId: item.id, idx, key: "orderState", valueTypeIdx: 0, valueKey: "orderDone", data })}>
            { 
              showTextOrIcon( 
                "조리 완료", 
                <IconCircleCheck size={16} stroke={1.5}/>
              )
            }
          </ActionIcon>
          <ActionIcon color="red">
            { 
              showTextOrIcon( 
                "수령 요청", 
                <IconHelicopter size={16} stroke={1.5}/>
              )
            }
          </ActionIcon>
          <ActionIcon color="red">
            { 
              showTextOrIcon( 
                "주문 완료", 
                <IconPencil size={16} stroke={1.5}/>
              )
            }
          </ActionIcon>
          <ActionIcon color="red">
            { 
              showTextOrIcon( 
                "주문 취소", 
                <IconTrash size={16} stroke={1.5}/>
              )
            }
          </ActionIcon>
        
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
     <ScrollArea sx={{ height: "100vh" }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}> 
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
       <thead className={cx(classes.header, { [classes.scrolled]: scrolled })} >
          <tr>
          <th>메뉴이름</th>
          <th>가격</th>
          <th>병렬표기</th>
          <th>메뉴별 팔린 수량</th>
          <th>
            상태 관리
            <SwitchToggle handler={handleTextOrIcon} />
          </th>
          
          </tr>
         
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </ScrollArea></>
  );
}