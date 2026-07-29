const validation = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse({
            body: req.body,
            params: req.params,
            query: req.query,
        });
        if (!result.success) {
            return res.status(400).json({
                message: result.error.issues,
            });
        }
        next();
    };
};
export default validation;
//# sourceMappingURL=validation.middleware.js.map