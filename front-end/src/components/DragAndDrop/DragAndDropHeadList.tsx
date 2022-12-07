import { createStyles, Text, Image } from '@mantine/core';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, {useEffect } from 'react';
const useStyles = createStyles((theme) => ({
  item: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    //  border: `1px solid ${
      // theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    // }`,
    padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  itemDragging: {
    boxShadow: theme.shadows.sm,
    
  },

  itemImage:{
    borderRadius: '50%',
  },

  symbol: {
    fontSize: 24,
    fontWeight: 700,
    width: 60,
    color: theme.colors.dark[5]
  },
}));



interface DndListProps {
  data: {
    position: number;
    mass: number;
    symbol: string;
    name: string;
  }[];
}

const dataDndList: DndListProps[] = [
  {
    position: 1,
    mass: 100,
    symbol: "Y",
    name: "YINUM"
  },
  {
    position: 2,
    mass: 100,
    symbol: "A",
    name: "YINUM"
  },
  {
    position: 3,
    mass: 100,
    symbol: "C",
    name: "YINUM"
  },
  {
    position: 4,
    mass: 100,
    symbol: "B",
    name: "YINUM"
  }
]


export function DragAndDropHeadList({ cardData, reOrderCardData } ) {
  const { classes, cx } = useStyles();
  const items = cardData.map((item, index) => {
  
    return  (
    <Draggable key={item.image} index={index} draggableId={item.image}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          
          <div>
            <Image
              className={cx(classes.itemImage)}
              src={item.image}
              height={40}
              alt="Norway"
            />
            <Text color="dimmed" size="lg">
              {item.category}
            </Text>
          </div>

        </div>
      )}
    </Draggable>
  )});

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        const result = reOrderCardData({ from: source.index, to: destination?.index || 0 })
        return result
      }
        
      }
    >
      <Droppable droppableId="dnd-list" direction="horizontal"  type={"CARD"} >
        {(provided) => (
          <div style={{ display: "flex" }} {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

