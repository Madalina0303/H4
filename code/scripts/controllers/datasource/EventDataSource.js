const { DataSource } = WebCardinal.dataSources;

const db = {

   fetchData(start, length) {

       return [...Array(length).keys()];

   },

};
const events = []

export class EventDataSource extends DataSource {

   constructor(...props) {

       super(...props)

   }

   addEvent(date, time, category, details){
    events.push({
        date: date,
        time: time,
        category: category,
        details: details,
    })
   }



   /**

  * @override

  */

   async getPageDataAsync(startOffset, dataLengthForCurrentPage) {

       const data = events
       if(localStorage == null){
        return []
       }
       return data.map((index) => ({

        date: index.date,
        time: index.time,
        category: index.category,
        details: index.details,

   }));
   }

}