module.exports = {
  index: async (req, res) => {
    const name = 'John';
    return res.render('index', { name });
  },
};
