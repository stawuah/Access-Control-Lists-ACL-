const bcrypt = require('bcrypt');
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

// Register endpoint for admin
const registerAsAdmin = async (req, res) => {
    try {
        // Check if the current user has the necessary permissions to access this route
        if (!aclInstance.isAllowed(req.user.role, '/registerAsAdmin', 'post')) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        const { name, password, email, } = req.body;


        // Perform user registration logic here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        if (!imageName) {
            return res.status(400).json({ message: 'Image upload failed.' });
        }

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
};
