const checkLogin = (req, res, next) => {
    if (!req.oidc.isAuthenticated()) {
        return res.status(401).send({
            error: 'You are not authorized to change data without login.',
            login: "https://cse341-dayley-project2.onrender.com/login"
        });
    }
    next();
};

module.exports = {
    checkLogin
};

// npm install express-openid-connect --save