const authConfig = require("../configs/auth.config");
const auth = require("./auth.middleware");

module.exports = {
    auth : auth
};
