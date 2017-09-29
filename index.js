const provider = {
  type: 'provider',
  name: 'gdelt',
  hosts: true,
  Model: require('./model'),
  version: require('./package.json').version
};

module.exports = provider;
