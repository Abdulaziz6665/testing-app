const express = require('express')
const app = express()
const { pg } = require('./postgresql/pg')
const parser = require('co-body')

const PORT = process.env.PORT || 5000

app.use(express.json())

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

const CLINICS = `
select
ms.m_service_name,
sms.sub_m_service_name,
c.clinica_name,
cm.clinica_message_text,
cm.clinica_message_cost
from clinica_message as cm
join med_services as ms on cm.m_service_id = ms.m_service_id and ms.m_service_id = $1
left join sub_med_services as sms on cm.sub_m_service_id = sms.sub_m_service_id
join clinica as c on cm.clinica_id = c.clinica_id;
`

const subCLINICS = `
select
ms.m_service_name,
sms.sub_m_service_name,
c.clinica_name,
cm.clinica_message_text,
cm.clinica_message_cost
from clinica_message as cm
join med_services as ms on cm.m_service_id = ms.m_service_id and ms.m_service_name = $1
join sub_med_services as sms on cm.sub_m_service_id = sms.sub_m_service_id and sms.sub_m_service_id = $2
join clinica as c on cm.clinica_id = c.clinica_id;
`

const findUser = `
select 
clinica_user,
clinica_password
from clinica
where clinica_user = $1 and clinica_password = $2;
`

const clinica = `
  select 
    clinica_name,
    clinica_address,
    clinica_phone_number
  from 
    clinica
  where clinica_user = $1 and clinica_password = $2;
`

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/', async(req, res) => {
  
  try {
    res.send([await pg(QUERY), await pg(test)])

  } catch (e) {
    console.log(e)

  }

})


app.post('/sub', async (req, res) => {
  const { user, id } = req.body


  if (user && id) {
    res.send(await pg(subCLINICS, user, id))
  }

  if (user && id === undefined) {
    res.send(await pg(CLINICS, user))
  }


})


app.post('/login', async (req, res) => {
  const { user, pass } = req.body

  try {

    const userFinded = await pg(findUser, user, pass)

    if (userFinded.length) {
      res.send({message: true})

    } else {
      res.send({message: 'user not found'})
    }

  } catch (e) {
    console.log(e)
  }

})

app.post('/clinica', async (req, res) => {

  const { user, pass } = req.body

  const testt = await pg(clinica, user, pass)


  if (test[0].clinica_name !== null) {
    res.send([testt, await pg(QUERY), await pg(test)])

  } else {
    res.send(false)
  }

})

const SELECT = `
  select
    clinica_id
  from
    clinica
  where clinica_user = $1;
`

const UPDATE = `
  update clinica set clinica_name = $1, clinica_address = $2, clinica_phone_number = $3 where clinica_id = $4 returning * ;
`

app.post('/clinical/info', async (req, res) => {

  const { clinica, address, cliName, user } = req.body
  const cli_id = await pg(SELECT, user)

  if (cli_id.length) {
    res.send(await pg(UPDATE, clinica, address, cliName, cli_id[0].clinica_id))
  } else {
    console.log('error')
  }


})

app.listen(PORT, () => console.log('server running is ' + PORT))