//import fs from 'fs';
//import path from 'path';

import got from 'got';

//const dataDir = path.join(process.cwd(), 'data');

const dataURL = "https://dev-week-11-sql.pantheonsite.io/wp-json/twentytwentyone-child/v1/contacts";

export async function getAllIds() {
  /*const filePath = path.join(dataDir, 'persons.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj1 = JSON.parse(jsonString);
  const filePath2 = path.join(dataDir, 'persons2.json');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj = jsonObj1.concat(jsonObj2);*/

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
  /*const filePath = path.join(dataDir, 'persons.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj1 = JSON.parse(jsonString);
  const filePath2 = path.join(dataDir, 'persons2.json');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj = jsonObj1.concat(jsonObj2);
  jsonObj.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });*/

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
  /*const filePath = path.join(dataDir, 'persons.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj1 = JSON.parse(jsonString);
  const filePath2 = path.join(dataDir, 'persons2.json');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj = jsonObj1.concat(jsonObj2);
  const objMatch = jsonObj.filter(obj => {
    return obj.id.toString() === idRequested;
  });*/

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