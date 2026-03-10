const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {

  try {

    const { username, password } = req.body;

    // usuário mockado (apenas para teste técnico)
    const user = {
      id: 1,
      username: "admin",
      passwordHash: await bcrypt.hash("admin123", 10)
    };

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (username !== user.username || !passwordMatch) {

      return res.status(401).json({
        message: "Invalid credentials"
      });

    }

    const token = jwt.sign(

      { userId: user.id },

      process.env.JWT_SECRET,

      { expiresIn: "1h" }

    );

    res.json({ token });

  } catch (error) {

    next(error);

  }

};

module.exports = {
  login
};