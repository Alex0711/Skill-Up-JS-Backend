const { models } = require('../libs/sequelize');
const ctrlAccount = require("./account");
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')
// example of a controller. First call the service, then build the controller method
module.exports = {
  get: async (id) => {
    const user = await models.User.findOne({
      where: {
        id
      },
      include: ["role"]
    });
    const account = await models.Account.findOne({
      where: {
        userId: id
      }
    });

    if (user && account) return { user, account };
    else throw boom.notFound('User not found')
  },
  post: async (schema) => {

    const saltRounds = 10;
    const pass = await bcrypt.hash(schema.password, saltRounds).then(function (hash) {
      return hash;
    });
    const [user, created] = await models.User.findOrCreate({
      where: {
        email: schema.email
      },
      defaults: {
        ...schema,
        password: pass
      }
    })
    if (created) {
      //here the axios.post with userId to accounts.post/create to link an account in a new user
      let account = await ctrlAccount.post(user.id);
      return { user, account } // and account;
    }
    else throw boom.forbidden("Email already exists")
  },
  delete: async (id) => {
    let account = await ctrlAccount.delete(id);

    let user = await models.User.destroy({
      where: {
        id: id
      }
    });
    if (user !== 0 && account !== false) return "deleted"
    else throw boom.notImplemented("This user doesn't exists!");
  }

}
