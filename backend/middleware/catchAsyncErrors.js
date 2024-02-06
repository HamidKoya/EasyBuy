/*module.exports = (asyncFunc) => (req,res,next) => {
    Promise.resolve(asyncFunc(req,res,next)).catch(next)
}*/

module.exports = (asyncFunc) => async (req, res, next) => {
  try {
    await asyncFunc(req, res, next);
  } catch (error) {
    next(error);
  }
};
