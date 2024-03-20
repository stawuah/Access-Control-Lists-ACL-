const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Custom authentication middleware
const authenticateUser = (req, res, next) => {
    try {
        // Retrieve the token from the Authorization header
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Verify the token and extract the user information
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decodedToken.user;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

 const GenerateSalt = async () => {
  return await bcrypt.genSalt();
};

 const GeneratePassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

 const ValidatePassword = async (enteredPassword, savedPassword) => {
  return await bcrypt.compare(enteredPassword, savedPassword);
};

const GenerateSignature = async (payload) => {
  return jwt.sign(payload, process.env.APP_SECRET, { expiresIn: '90d' });
};

module.exports = { authenticateUser, GeneratePassword, GenerateSignature, GenerateSalt, ValidatePassword};



