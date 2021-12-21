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
async function deleteNovedadByID(id) {
  var query = "delete from adminovedades where id=?";
  var rows = await pool.query(query, [id]);
  return rows;
}

module.exports = { getNovedades, insertAdmiNovedad, deleteNovedadByID };
