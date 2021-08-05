const express = require('express')
const app = express()
const { pg } = require('./postgresql/pg')

const PORT = process.env.PORT || 5000


const QUERY = `
select 
  m_service_id,
  m_service_name
from
  med_services;
`

const test = `
select
  med.m_service_id,
  med.m_service_name,
  sub.sub_m_service_id,
  sub.sub_m_service_name
from sub_med_services as sub
join med_services as med on sub.m_service_id = med.m_service_id;
`

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/', async(req, res) => {
  res.send([await pg(QUERY), await pg(test)])
})

app.post('/sub', (req, res) => {
  console.log(req.body)
})

app.listen(PORT, () => console.log('server running is ' + PORT))