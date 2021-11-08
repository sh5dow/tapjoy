const confLocal = require('./config.local');
const confProd = require('./config.prod');

// TODO: based on env, set config: either local or prod
const conf = true ? confLocal : confProd;

module.exports = {
    ...conf
}
