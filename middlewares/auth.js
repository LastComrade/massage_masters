const auth = {
  checkToken: (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token) {
      return res.status(401).json({
        message: "Access denied. No token provided",
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
  },

  admin: (req, res, next) => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }
  },
};

module.exports = auth;
