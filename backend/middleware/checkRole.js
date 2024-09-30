const apiResponse = require("../helper/apiResponse");
const { constant } = require('./middleware.constant');
const { Auth_error } = constant;

const hasRole = (role) => {
    return (req, res, next) => {
        if (role !== req.userId.user.role) {
            console.log(req.userId.user.role, "userId")

            return apiResponse.ErrorResponse(res, Auth_error);
        } else {
            next();
        }
    }
}

const hasMultipleRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.userId.role)) {
            return apiResponse.ErrorResponse(res, Auth_error);
        } else {
            next();
        }
    };
};

module.exports = {
    hasRole,
    hasMultipleRole
};
