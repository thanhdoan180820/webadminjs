const jwt = require("jsonwebtoken");
const SECRET_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqGKukO1De7zhZj6+H0qtjTkVxwTCpvKe4eCZ0FPqri0cb2JZfXJ/DgYSF6vUpwmJG8wVQZKjeGcjDOL5UlsuusFncCzWBQ7RKNUSesmQRMSGkVb1/3j+skZ6UtW+5u09lHNsj6tQ51s1SPrCBkedbNf0Tp0GbMJDyR4e9T04ZZwIDAQAB"

let generateToken = (user) => {
    return new Promise((resolve, reject) => {
        const userData = {
            userId: user.userId,
            email: user.email,
        }
        jwt.sign(
            {data: userData},
            SECRET_KEY,
            {
                algorithm: "HS256",
<<<<<<< HEAD
                expiresIn:   60 * 60,
=======
>>>>>>> 8122bd8e810ffe735ae3572bebe8ac8c2e6b3086
            },
            (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            });
    });

}
let verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return reject(error);
            }
            resolve(decoded);
        });
    });
}
module.exports = {
    generateToken: generateToken,
    verifyToken: verifyToken
};
