const model = require('../models/snacks');

const getAll = (req, res, next) => {
  let result = model.getAll();
  res.status(200).send({data: result});
}

const getOne = (req, res, next) => {
  let result = model.getOne(req.params.id);
  if(result.errors){
    return next(result.errors);
  }
  res.status(200).send({data: result});
}

const create = (req, res, next) => {
  let result = model.create(req.body);

  if(result.errors){
    return next(result.errors)
  }
  res.status(201).send({data: result});
}

const update = (req, res, next) => {
  let result = model.update(req.params.id, req.body);

  if(result.errors){
    return next(result.errors)
  }
  res.status(200).send({data:result});
}

const deleteOne = (req, res, next) => {
  const result = model.deleteOne(req.params.id);

  if (result.errors) return next(result.errors);

  res.status(204).json({ data :result});
}

module.exports = { getAll, getOne, create, update, deleteOne }
