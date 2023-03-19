const auth = {
  admin: (req, res, next) => {
    next();
  },
};

module.exports = auth;
