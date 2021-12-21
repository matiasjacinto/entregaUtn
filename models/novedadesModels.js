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

async function getNovedadesByID(id) {
  var query = " select * from adminovedades where id=?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarNovedadByID(obj, id) {
  try {
    var query = "update adminovedades set? where id=?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getNovedades,
  insertAdmiNovedad,
  deleteNovedadByID,
  getNovedadesByID,
  modificarNovedadByID,
};
