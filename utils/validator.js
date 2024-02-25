const yup = require("yup");

const userMetaschema = yup.object({
   username: yup.string().required().min(1),
   email: yup.string().required().min(1).email(),
});

const validateUser = async (req, res, next) => {
   try {
      await userMetaschema.validate(req.body);
      next();
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};

const validateUserId = (req, res, next) => {
   const { userId } = req.params;
   if (!Number.isInteger(+userId) || +userId < 0) {
      return res.status(400).json({
         message: "Invalid userId",
      });
   }
   next();
};

module.exports = {
   validateUser,
   validateUserId,
};
