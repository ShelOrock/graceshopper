export const getAndCountAllModels = async (
  model,
  offset,
  limit
) => {
  
  try {
    const foundModels = await model.findAndCountAll({
      offset,
      limit
    });

    return foundModels;

  } catch(e) {
    throw Error('Error getting paginated model');
  };
};