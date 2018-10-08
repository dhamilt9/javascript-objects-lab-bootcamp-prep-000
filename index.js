var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
  var updatedObj=Object.assign({}, object)
  updatedObj[key]=value;
  return updatedObj;
}
