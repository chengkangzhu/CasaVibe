const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    //check if the 
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        //verify the token and add userId to req object
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
}