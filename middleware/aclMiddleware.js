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

module.exports = authenticateUser;



