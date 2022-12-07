import React, { useState} from 'react';
import {ActionIcon, Text, Button } from '@mantine/core'
import  {IconCircleMinus } from '@tabler/icons';
import dayjs from 'dayjs';
import { TimeRangeInput  } from '@mantine/dates';

function MultipleTimePicker( ) {
    const now = new Date();
    const then = dayjs(now).add(30, 'minutes').toDate();
    const [value, setValue] = useState<[Date, Date]>([now, then]);
    return <TimeRangeInput label="일반 영업 시간 설정" value={value} onChange={setValue} clearable />;
  }
  
const DayButton = ({text, disabled, handleClick}) => {
    return (
      <ActionIcon
        size={36}
        variant={ disabled ? "filled" : "outline"  }
        sx={{ '&[data-disabled]': { pointerEvents: 'all' } }}
        onClick={(event) => { 
          event.preventDefault()
          handleClick()
        }}>
          { text }
      </ActionIcon>
    )}

export const WorkingDaysSelector = ({ daysData, handleChecked }) => { return daysData?.map((item, idx) => (
<div>
    <Button variant="outline" color='red' >
      <IconCircleMinus size={20} stroke={2} color='red'/>
    </Button>
    
    <MultipleTimePicker />
    <Text color="#212529" fw={500} fz="sm">일반 영업일 설정</Text>
   
    <div>
    <Button.Group>
        <DayButton text={item[0].day} disabled={ item[0].isChecked } handleClick={ () => handleChecked(idx,0)} />
        <DayButton text={item[1].day} disabled={ item[1].isChecked } handleClick={ () => handleChecked(idx,1)} /> 
        <DayButton text={item[2].day} disabled={ item[2].isChecked } handleClick={ () => handleChecked(idx,2)} /> 
        <DayButton text={item[3].day} disabled={ item[3].isChecked } handleClick={ () => handleChecked(idx,3)} /> 
        <DayButton text={item[4].day} disabled={ item[4].isChecked } handleClick={ () => handleChecked(idx,4)} /> 
        <DayButton text={item[5].day} disabled={ item[5].isChecked } handleClick={ () => handleChecked(idx,5)}  />
        <DayButton text={item[6].day} disabled={ item[6].isChecked } handleClick={ () => handleChecked(idx,6)}  />
    </Button.Group>
    </div>
</div>
));
}