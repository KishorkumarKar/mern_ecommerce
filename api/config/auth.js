module.exports = {
    ensureAuthenticated: (req, res, next) => {
        try {
            if (req.session.passport.user) {
                next();
            } else {
                res.status(401).json({ success: false, error: "Access Denied" })
            }
        }
        catch (e) {
            res.status(401).json({ success: false, error: "Access Denied" })
        }

    },
    forwardAuthenticated: (req, res, next) => {
        next();
    }
}