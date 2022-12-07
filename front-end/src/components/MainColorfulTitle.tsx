import { Text,Title } from '@mantine/core'
export function MainColorfulTitle({startText, pointText, endText}) {
    return (
      <Title order={3}>
        {startText}
        <Text span c="blue" inherit>{pointText}</Text> 
        {endText }
      </Title>
    );
}

 