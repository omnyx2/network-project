
export class WorkingDateJson{
    francchi_id : number
    data : WorkingDateDto[]
}

export class WorkingDateDto{
    days: string[]
    nowAndThen: Date[]
}

const exampleDateData = [{
    days: ['월','화','수','목'],
    nowAndThen: [new Date(), new Date()]
  },{
    days: ['금','토'],
    nowAndThen: [new Date(), new Date()]
  },{
    days: ['일'],
    nowAndThen: [new Date(), new Date()]
  }]