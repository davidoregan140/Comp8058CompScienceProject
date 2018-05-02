const secrets = {
  db_uri:
    "mongodb://davidoregan-dev:Danglepass14@ds113019.mlab.com:13019/weddingmanagement-dev"
};

module.exports = {
  requestSecret: function(s) {
    return secrets[s];
  }
};
