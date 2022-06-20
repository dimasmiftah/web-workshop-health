module.exports = auth = (req, res, next) => {
  console.log(req.session);
  if (!req.session) return res.redirect('/login');

  res.locals.user = req.session.user;

  return next();
};
