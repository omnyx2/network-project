import { useState, useEffect} from 'react';
import { Calendar, TimeRangeInput  } from '@mantine/dates';
import { Button, Input, Text,Title } from '@mantine/core'
import { MainColorfulTitle } from '../../components/MainColorfulTitle.tsx'
import dayjs from 'dayjs';

import { IconCirclePlus, IconAt, IconCircleMinus} from '@tabler/icons';

import { WorkingDaysSelector } from '../../components/WorkingDaysSelector/WorkingDaysSelector.tsx';
import { DaysDataStateSerializer } from '../../components/WorkingDaysSelector/dataController.tsx';
// {
//   franchhi_id: 
//   days_data: 
//   update_date: date()
//    
// }

function TimePicker() {
  const [value, setValue] = useState<Date[]>([]);
  return <Calendar multiple value={value} onChange={setValue} />;
}

function ShopWorkingInfoPage() {
  
  const [daysDataState, setDaysDataState] = useState()
 
  useEffect(()=> {
    const initData = new DaysDataStateSerializer().serializedData()
    setDaysDataState(initData)
  },[])

  useEffect(() => {}, [daysDataState])

  const handleCreateTypeDate = () => {
    const initData = new DaysDataStateSerializer(undefined).createTypeOfData(daysDataState)
    setDaysDataState(initData)
  }

  const handleChecked = (typeId, compId) => {
    const dateData = daysDataState?.map((item, idx) => {
      if(idx !== typeId) item[compId].isChecked = false
      else item[compId].isChecked = true;

      return item;
    })
    setDaysDataState(dateData)
  }

  return (
    <>
      <div>
        <MainColorfulTitle startText={ "현재 포뮬라는" } pointText={ "정상영업" } endText={ "중" }/>
      </div>
      <div>
        <Text color="#212529" fw={500} fz="md">Type1 </Text>
          { WorkingDaysSelector({handleChecked, daysData: daysDataState}) }
        <div>
          <div>
            <Text color="#212529" fw={500} fz="sm">비정기 휴업일 설정 </Text>
            <TimePicker />
          </div>
     
          <div>
            <Input.Wrapper label="사유(선택사항)">
              <Input
                radius='sm'
                size = 'sm'
                icon={<IconAt size={16} />}
                placeholder="Your email"
              />
            </Input.Wrapper>
          </div>
        </div>
      </div>
      <div  >
        <Button variant="outline" color='green' onClick={ () => handleCreateTypeDate() } >
          <IconCirclePlus size={20} stroke={2} color='green'/>
        </Button>

      </div>
      
      <div>
        <Text color="#212529" fw={500} fz="sm">조기 오픈 및 마감</Text>
        <Button.Group>
          <Button 
          
            variant="default" 
            
            sx={{ '&[data-disabled]': { pointerEvents: 'all' } }}
            onClick={(event) => event.preventDefault()}>
              { "오픈" }
          </Button>
          <Button 
            variant="default" 
           
            sx={{ '&[data-disabled]': { pointerEvents: 'all' } }}
            onClick={(event) => event.preventDefault()}>
              { "마감" }
          </Button>
        </Button.Group>
        <Input.Wrapper label="사유(선택사항)">
          <Input
            radius='sm'
            size = 'sm'
            icon={<IconAt size={16} />}
            placeholder="Your email"
          />
        </Input.Wrapper>
      </div>
    </>
  );
}

export default ShopWorkingInfoPage;
