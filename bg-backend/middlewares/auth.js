import jwt from "jsonwebtoken";

const auth = (mode = "strict") => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    // ❌ No token
    if (!authHeader) {
      if (mode === "optional") {
        req.user = null;
        return next();
      }

      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      if (mode === "optional") {
        req.user = null;
        return next();
      }

      return res.status(401).json({ message: "Invalid token format" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = {
        userId: decoded.id,
      };

      next();
    } catch (error) {
      if (mode === "optional") {
        req.user = null;
        return next();
      }

      return res.status(401).json({ message: "Token expired or invalid" });
    }
  };
};

export default auth;