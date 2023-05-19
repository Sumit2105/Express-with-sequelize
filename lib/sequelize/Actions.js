const { requiredParam } = require('../../utils');

class Actions {
  constructor(model) {
    this.model = model;
  }

  async findOne({ criteria = requiredParam('criteria'), options = {} }) {
    return await this.model.findOne({
      where: {
        ...criteria,
      },
      nest: true,
      ...options,
    });
  }

  async findAll({ criteria = requiredParam('criteria'), options }) {
    return await this.model.findAll({
      where: {
        ...criteria,
      },
      raw: true,
      nest: true,
      ...options,
    });
  }

  async update({
    criteria = requiredParam('criteria'),
    dataToUpdate = requiredParam('dataToUpdate'),
    options = {},
  }) {
    return await this.model.update(
      {
        ...dataToUpdate,
      },
      {
        where: {
          ...criteria,
        },
        ...options,
      },
    );
  }

  async bulkCreate({ data = requiredParam('data'), options = {} }) {
    return await this.model.bulkCreate(data, {
      returning: true,
      ...options,
    });
  }

  async create({ data = requiredParam('data'), options = {} }) {
    return await this.model.create(data, { ...options });
  }

  async upsert({ data = requiredParam('data'), options = {} }) {
    return await this.model.upsert(data, { ...options, returning: false });
  }

  async max({ field = requiredParam('field'), options = {}, criteria = {} }) {
    return await this.model.max(
      field,
      {
        where: {
          ...criteria,
        },
      },
      { ...options },
    );
  }

  async runQuery({ query = requiredParam('query'), options = {} }) {
    return await this.model.sequelize.query(query, {
      raw: true,
      nest: true,
      ...options,
    });
  }

  async count({ criteria = requiredParam('criteria'), options = {} }) {
    return await this.model.count({
      where: {
        ...criteria,
      },
      nest: true,
      ...options,
    });
  }
  async findOrCreate({ criteria = requiredParam('criteria'), options = {} }) {
    return await this.model.findOrCreate({
      where: {
        ...criteria,
      },
      ...options,
    });
  }
}

module.exports = Actions;
