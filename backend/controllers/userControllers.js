
// Login a user
//Method: POST
//endpoint: /api/v1/users/auth
//protected: false

const authUser = (req, res) => {
    res.status(200).json({
        message: "Auth User"
    })
}

// Register a user
//Method: POST
//endpoint: /api/v1/users/
//protected: false

const createUser = (req, res) => {
    res.status(200).json({
        message: "Create User"
    })
}

// Logout a user
//Method: POST
//endpoint: /api/v1/users/logout
//protected: false

const logoutUser = (req, res) => {
    res.status(200).json({
        message: "Logout User"
    })
}

// Get a user profile
//Method: GET
//endpoint: /api/v1/users/profile
//protected: true

const getProfile = (req, res) => {
    res.status(200).json({
        message: "get User Profile"
    })
}

// Update a user profile
//Method: PUT
//endpoint: /api/v1/users/profile
//protected: true

const updateProfile = (req, res) => {
    res.status(200).json({
        message: "Update User Profile"
    })
}

export  {
    updateProfile,
    getProfile,
    logoutUser,
    authUser,
    createUser
}