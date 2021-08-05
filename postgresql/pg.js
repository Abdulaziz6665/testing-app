const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  database: 'med',
  user: 'postgres',
  password: '6665',
  port: 5432
})

// const pool = new Pool ({
//   connectionString: 'postgres://xongndcb:f1qcLpNe_q_GXp5QSa58Ar5wtv0l-QPP@chunee.db.elephantsql.com/xongndcb'
// })


const pg = async (SQL, ...params) => {

  const client = await pool.connect()

  try {
    const { rows } = await pool.query(SQL, params)
    return rows

  } catch (error) {
    console.log(error)

  } finally {
    client.release()
  }

}

module.exports.pg = pg