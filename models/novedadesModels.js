var pool = require("./bd");
async function getNovedades() {
  var query = "select * from adminovedades";
  var rows = await pool.query(query);
  return rows;
}

async function insertAdmiNovedad(obj) {
  try {
    var query = "insert into adminovedades set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
module.exports = { getNovedades, insertAdmiNovedad };
