import { userServices } from '../services/index.js';

export const getSingleUser = async (req, res, next) => {

  try {
    const userOrNull = await userServices.getUserBySession(req.params.userId)

    if(!userOrNull) {
      res.sendStatus(404);

    } else {
      res
        .status(200)
        .send(userOrNull);
    };

  } catch(e) {
    conssole.log(e.message);
    res.sendStatus(500) && next(e);;
  };
};
