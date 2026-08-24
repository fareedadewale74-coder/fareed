const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next ) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({message: "Unauthorized"});
    }

    const token = authHeader.split(" ")[1];
    console.log(token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        req.user = decoded;

        next();
    } catch (err) {
        return res.status(401).json("expired Token");
    }
};

const verifyUser = (req, res, next) => {
    console.log(req.user);
    try {
        if (req.user.role !== "admin") return res.status(400).json("Rich men only");
        if (req.user.role === "admin") return next();
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error ");
    }
};

module.exports = { verifyToken, verifyUser};