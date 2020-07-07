export function getProperty(propName) {
  let value = localStorage.getItem(propName);
  return JSON.parse(value);
}

export function setProperty(propName,value){
let val = JSON.stringify(value);
localStorage.setItem(propName,val);
}

export function resetProperty(propName){
localStorage.removeItem(propName);
}
