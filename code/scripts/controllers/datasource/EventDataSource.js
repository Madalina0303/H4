const { DataSource } = WebCardinal.dataSources;

const db = {

   fetchData(start, length) {

       return [...Array(length).keys()];

   },

};

export class EventDataSource extends DataSource {

   constructor(...props) {

       super(...props)

   }

   /**

  * @override

  */

   async getPageDataAsync(startOffset, dataLengthForCurrentPage) {

       const data = db.fetchData(startOffset, dataLengthForCurrentPage);

       return data.map((index) => ({

           date: startOffset + index + 1,
           time: `Text ${index + 1}`,
           category: "Aa",
           details: "",

       }));

   }

}