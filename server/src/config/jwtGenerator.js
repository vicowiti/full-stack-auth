const jwt = require("jsonwebtoken");

const jwtGenerator = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_STRING, {
    expiresIn: "3d",
  });

  return token;
};

module.exports = jwtGenerator;
