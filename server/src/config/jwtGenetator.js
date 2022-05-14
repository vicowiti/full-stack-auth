const jwt = require("jsonwebtoken");

const jwtGenerator = async (id) => {
  const token = await jwt.sign({ id }, process.env.JWT_STRING, {
    expiresIn: "3d",
  });

  return token;
};

module.exports = jwtGenerator;
