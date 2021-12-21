var pool = require("./bd");
async function getNovedades() {
  var query = "select * from adminovedades";
  var rows = await pool.query(query);
  return rows;
}
module.exports = { getNovedades };
