
interface daysDto {
    days: String[]; 
    nowAndThen: Date[]; 
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
  

export class DaysDataStateSerializer {
    constructor(data: daysDto[]) {
      if(data === undefined ) { data = exampleDateData } 
      this.data = data
      this.days = ['월','화', '수', '목', '금', '토', '일']
      this.translatedDateData = []
    }
  
    findMaxTypeNum() {
      let max = -1234567812345
      this.data?.forEach((e: daysDto, idx)=> {
        idx > max ? max = idx : max = max ;
      })
      if( max < -1) return -1;
      this.max = max
      return this.max;
    }
    serializedData() {
  
      // let data = (data !== undefined ? data : this.data);
      let translateData = this.data
      if( this.max < 0) { return "Error!get init of max num of type"; }
      if( translateData === undefined) { return "Error! No daysDataState"; }
      this.findMaxTypeNum()
      for ( let i = 0; i <= this.max ; i++ ) {
        const tempData = this.days.map((day, idx) => { 
          // console.log(i, day, idx, translateData[i].days)
          return {
            day,
            isChecked: !!translateData[i].days.find( (e) => e === day ),
            nowAndThen: translateData[i].nowAndThen
        }})
        this.translatedDateData.push(tempData)
      }
      return this.translatedDateData;
    }
  
    createTypeOfData(translatedDate) {
      let newTypeData = translatedDate[0]
      this.findMaxTypeNum()
      newTypeData = newTypeData?.map((e) => {
        this.data.push()
        return {  day: e.day, isChecked: false, nowAndThen: e.nowAndThen }
      })
   
      this.translatedDateData = [...translatedDate, {...newTypeData}]
      
      this.deserializeData( this.translatedDateData )
      console.log(this.data)
      return this.translatedDateData;
    }
  
    deserializeData(translatedDateData) {
      if( translatedDateData === undefined) { return "Error! No daysDataState"; }
      this.findMaxTypeNum()
      const buildNewDaysData = []
      const buildNewDayData = []
      const templateOfDateData = {
        days: [],
        nowAndThen: []
      }
      // this.translatedDateData
      // Type별로 받아야할 데이터 템플릿 만들기
      translatedDateData.forEach((daysData, t_idx) => {
        buildNewDaysData.push({ days: [], nowAndThen: daysData[t_idx].nowAndThen });
      })
      // 데이터 템플릿에 데이터 채워 넣기
      this.days.forEach((e, d_idx) => {
        translatedDateData.forEach((daysData, t_idx) => {
          if(daysData[d_idx].isChecked) {
            buildNewDaysData[t_idx].days.push(daysData[d_idx].day)
          }
        })
      })
      console.log(buildNewDaysData)
      this.data = [...buildNewDaysData]
      return buildNewDaysData
    }
  }
  