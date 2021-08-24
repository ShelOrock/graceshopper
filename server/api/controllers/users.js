import { userServices } from '../services/index.js';

export const getUser = async (req, res, next) => {
  try {
    const userOrNull = await userServices.getUserByPrimaryKey(req.user.id);
    if(!userOrNull) {
      res.sendStatus(404);

    } else {
      res
        .status(200)
        .send(userOrNull);
    };

  } catch(e) {
    conssole.log(e.message);
    res.sendStatus(500) && next(e);
  };
};
