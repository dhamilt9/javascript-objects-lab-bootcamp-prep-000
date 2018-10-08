var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
  var updatedObj=Object.assign({}, object, key, value)
  return updatedObj;
}
