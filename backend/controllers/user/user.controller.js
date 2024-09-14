const User = require('../../models/user/user.schema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const apiResponse = require('../../helper/apiResponse'); 


exports.register = async (req, res) => {
    try {
        const { 
            name, 
            email, 
            phoneNumber, 
            password, 
            confirmPassword, 
            role, 
            bio, 
            experience, 
            companyName, 
            gstNumber, 
            institutionName, 
            institutionType 
        } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return apiResponse.ErrorResponse(res, "Passwords do not match");
        }

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return apiResponse.ErrorResponse(res, "User already exists");
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user object
        let newUser = {
            name,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            accessLevel: role !== "admin" ? "basic" : "premium",
        };

        // Conditionally add role-specific fields
        if (role === "legalProfessional") {
            newUser.legalProfessional = {
                bio,
                experience,
            };
        } else if (role === "corporateClient") {
            newUser.corporateClient = {
                companyName,
                gstNumber,
            };
        } else if (role === "partnerInstitution") {
            newUser.partnerInstitution = {
                institutionName,
                institutionType,
            };
        }

        // Create and save the user
        user = new User(newUser);
        await user.save();

        return apiResponse.successResponseWithData(res, "User registered successfully", user);

    } catch (err) {
        console.error("Registration error:", err);
        return apiResponse.ErrorResponse(res, "Registration failed");
    }
};



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return apiResponse.unauthorizedResponse(res, 'Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return apiResponse.unauthorizedResponse(res, 'Invalid credentials');
        }

        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        };

        jwt.sign(
            payload,
            process.env.SECRET_KEY,
            { expiresIn: '5h' },
            (err, token) => {
                if (err) throw err;
                return apiResponse.successResponseWithData(res, 'Login successful', user);
            }
        );

    } catch (err) {
        console.log(err, "errrrrrrr")
        return apiResponse.ErrorResponse(res, 'Login failed');
    }
};


exports.getUserDetails = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return apiResponse.ErrorResponse(res, 'User not found');
        }
        return apiResponse.successResponseWithData(res, 'User details fetched successfully', user);
    } catch (err) {
        console.error('Error fetching user details:', err);
        return apiResponse.ErrorResponse(res, 'Error fetching user details');
    }
};



exports.updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const updates = req.body;

        if (updates.role === 'legalProfessional') {
            updates.legalProfessional = {
                bio: updates.bio,
                experience: updates.experience
            };
        } else if (updates.role === 'corporateClient') {
            updates.corporateClient = { companyName: updates.companyName, gstNumber: updates.gstNumber };
        } else if (updates.role === 'partnerInstitution') {
            updates.partnerInstitution = { institutionName: updates.institutionName, institutionType: updates.institutionType };
        }

        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!user) {
            return apiResponse.ErrorResponse(res, 'User not found');
        }
        return apiResponse.successResponseWithData(res, 'User profile updated successfully', user);
    } catch (err) {
        console.error('Error updating user profile:', err);
        return apiResponse.ErrorResponse(res, 'Error updating user profile');
    }
};



exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return apiResponse.notFoundResponse(res, 'User not found');
        }
        return apiResponse.successResponse(res, 'User deleted successfully');
    } catch (err) {
        console.error('Error deleting user:', err);
        return apiResponse.ErrorResponse(res, 'Error deleting user');
    }
};



exports.changePassword = async (req, res) => {
    try {
        const { userId, oldPassword, newPassword } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return apiResponse.notFoundResponse(res, 'User not found');
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return apiResponse.unauthorizedResponse(res, 'Old password is incorrect');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        return apiResponse.successResponse(res, 'Password changed successfully');
    } catch (err) {
        console.error('Error changing password:', err);
        return apiResponse.ErrorResponse(res, 'Error changing password');
    }
};
