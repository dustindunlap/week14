import got from 'got';

const dataURL = "https://dev-week-11-sql.pantheonsite.io/wp-json/twentytwentyone-child/v1/products";

export async function getAllIds() {
    let jsonString;
    try {
      jsonString = await got(dataURL);
      console.log(jsonString.body);
    } catch (err){
      jsonString.body = [];
      console.log(err);
    }
  
    const jsonObj = JSON.parse(jsonString.body);
    
    return jsonObj.map(item => {
      return {
        params: {
          id: item.ID.toString()
        }
      }
    });
  }

  export async function getSortedList() {  
    let jsonString;
    try {
      jsonString = await got(dataURL);
      console.log(jsonString.body);
    } catch (err){
      jsonString.body = [];
      console.log(err);
    }
  
    const jsonObj = JSON.parse(jsonString.body);
  
    jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.name);
  });
  
    return jsonObj.map(item => {
      return {
        id: item.ID.toString(),
        name: item.post_title
      }
    });
  }

  export async function getData(idRequested) {
    let jsonString;
    try {
      jsonString = await got(dataURL);
      console.log(jsonString.body);
    } catch (err){
      jsonString.body = [];
      console.log(err);
    }
  
    const jsonObj = JSON.parse(jsonString.body);
  
    const objMatch = jsonObj.filter(obj => {
      return obj.ID.toString() === idRequested;
    });
  
    let objReturned;
    if (objMatch.length > 0) {
      objReturned = objMatch[0];
    } else {
      objReturned = {};
    }
    return objReturned;
  }