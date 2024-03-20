const { ValidatePassword, GenerateSignature ,GeneratePassword, GenerateSalt } =require("../middleware/aclMiddleware")
const acl = require('acl')
const User = require('../model/userModels')

// Initialize ACL instance
const aclInstance = new acl(new acl.memoryBackend());

// Define user roles
aclInstance.allow([
    {
        roles: 'admin',
        allows: [
            { resources: '/registerAsAdmin', permissions: 'post' },
            // Define more admin-specific permissions here
        ],
    },
    {
        roles: 'user',
        allows: [
            // Define user-specific permissions here
        ],
    },
]);

const login = async (req, res) => {

    try {  

    const { password, email } = req.body;

    const user = await User.findOne({ email });
    
    if(!user){res.status(400).json({ error: 'Invalid Password or Email!' })};
    if (user && (await ValidatePassword(password, user.password ))){

      const givenToken = await GenerateSignature({ id: user._id });
  
      res.json({ user, givenToken });
    }
} catch (error) {
    console.error('Error:', error.message);
    es.status(500).json({ error: 'Internal Server Error' });
    }
}

// Register controller for admin
const registerAsAdmin = async (req, res) => {
    try {
        // Check if the current user has the necessary permissions to access this route
        if (!aclInstance.isAllowed(req.user.role, '/registerAsAdmin', 'post')) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        const { name, password, email, } = req.body;


        // Perform user registration logic here
        const salt = await GenerateSalt();
        const hashedPassword = await GeneratePassword(password, salt);
  
        const newUser = new User({
            name,
            password: hashedPassword,
            email,
        });

        const savedUser = await newUser.save();
        res.status(201).json({ savedUser, "savedImage": image });


        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    registerAsAdmin,
    login
};
