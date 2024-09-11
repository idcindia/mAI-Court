const User = require('../../models/user/user.schema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const apiResponse = require('../../helper/apiResponse'); 


exports.register = async (req, res) => {
    try {
        const { name, email, phoneNumber, password, confirmPassword, role, legalProfessional, corporateClient, partnerInstitution, admin } = req.body;

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return apiResponse.ErrorResponse(res, "Passwords do not match");
        }

        let user = await User.findOne({ email });
        if (user) {
            return apiResponse.ErrorResponse(res, "User already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            accessLevel: role !== "admin" ? "basic" : "premium",
            legalProfessional,
            corporateClient,
            partnerInstitution,
            admin
        });

        await user.save();
        return apiResponse.successResponseWithData(res, "User registered successfully", user);

    } catch (err) {
        console.log(err);
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
