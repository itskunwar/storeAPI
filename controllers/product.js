const helloMonday = (req, res) => {
  res.send("Hello Monday!");
};

const helloSunday = (req, res) => {
  res.send("Hello Sunday!");
};

module.exports = { helloMonday, helloSunday };
