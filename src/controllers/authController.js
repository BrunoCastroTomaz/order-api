const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {

  try {

    const { username, password } = req.body;

    // usuário mockado (apenas para teste técnico)
    const user = {
      id: 1,
      username: "admin",
      passwordHash: "$2b$10$fcff8u2nEfd.kgE9Qs0v/ujjakzSBpxSBffIUfLzXnMfZeS7nG3me"
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