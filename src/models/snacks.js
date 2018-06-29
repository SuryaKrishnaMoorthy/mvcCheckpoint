const uuid = require("uuid/v4");
let snacks = [{id: "cb646602-ade8-4d4e-b638-99466c41ebb9", name: "Bitterballen", origin: "Netherlands", category: "meat", description: "A round shaped beef-ragout version of croquette, typically containing a mixture of beef or veal (minced or chopped), beef broth, butter, flour for thickening, parsley, salt and pepper, resulting in a thick ragout."}, {id: "fd89b4e4-2c17-46e5-bd41-e258bc64feec", name: "Pazham Pori", origin: "South India", category: "vegan", description: "Traditional banana fritters"}]

const getAll =() => {
  return snacks;
}

const getOne = (id) => {
  const errors=[];
  const snack = snacks.find(snack => snack.id === id);
  if(!snack) {
    errors.push({status: 404, error: `${id} does not exist`})
    response = {errors}
  }else{
    response = snack;
  }
  return response;
}

const create = (body) => {
  const errors=[];
  const name = body.name;
  const origin = body.origin;
  const category = body.category;
  const description =  body.description;
  let response;

  if(!name || !origin || !category || !description){
    errors.push({status: 400, error: "Please provide name, origin, category and description of the snack"});
    response = {errors};
  }else{
    const snack = {id:uuid(), name, origin, category, description};
    snacks.push(snack);
    response = snack;
  }
  return response;
}

const update = (id,body) => {
  const errors = [];
  const name = body.name;
  const origin = body.origin;
  const category = body.category;
  const description =  body.description;
  let response;

  const snack = snacks.find(snack => snack.id === id);
  if(!snack){
    errors.push({status: 404, error: "Id not found"})
    response = {errors};
  } else if(!name || !origin || !category || !description){
    errors.push({status: 400, error: "Please provide name, origin, category and description of the snack"});
    response = {errors};
  }else{
    snack.name = name;
    snack.origin = origin;
    snack.category = category;
    snack.description = description;
    response = snack;
  }
  return response;
}

const deleteOne = (id) => {
  const errors = [];
  let response;
  const snackId = snacks.findIndex(snack => snack.id === id);

  if(snackId === -1){
    errors.push({status: 404, error: "Id not found"})
    response = {errors};
  }else{
    response = snacks[snackId];
    snacks.splice(snackId, 1);
  }
  return response;
}

module.exports = {getAll, getOne, create, update, deleteOne}
