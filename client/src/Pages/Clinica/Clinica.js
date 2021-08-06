import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Clinica() {
  const { user, pass } = JSON.parse(localStorage.getItem('data'))
  const [data, setData] = useState([])
  const [subData, setSubData] = useState([])


  const [medService, setMedService] = useState([])
  const [submit, setSubmit] = useState(false)


  const [select, setSelect] = useState()
  const [text, setText] = useState()
  const [cost, setCost] = useState()

  const [clinica, setClinica] = useState()
  const [address, setAddress] = useState()
  const [cliName, setCliName] = useState()

  useEffect(() => {

      ;(async () => {

        const res = await fetch('http://localhost:5000/clinica', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            user, pass
          })
        })
        const json = await res.json()
        
          setData([...json[0]])
          setMedService([...json[1]])
          setSubData([...json[2]])
      })()

  }, [user, pass])

  useEffect(() => {

      if (clinica && address && cliName && submit) {

        ;(async () => {

          const res = await fetch('http://localhost:5000/clinical/info', {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              user, pass, clinica, address, cliName
            })
          })
          const json = await res.json()
          setData([...json])
          
        })()
        setSubmit(false)
      }

  }, [clinica, address, cliName, submit, user, pass])


  console.log(subData, medService)

  return(
    <>
      {!data && (
        <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          setSubmit(true)
        }}>
          <input type="text" name='clinica' autoComplete='off' placeholder='clinica name' required onKeyUp={(e) => setClinica(e.target.value)} />
          <input type="text" name='cli-address' autoComplete='off' placeholder='clinica address' required onKeyUp={(e) => setAddress(e.target.value)} />
          <input type="text" name='cli-phone' autoComplete='off' placeholder='clinica phone number' required onKeyUp={(e) => setCliName(e.target.value)} />
          <button>press</button>
        </form>
        <Link to='/'>
          <p>home</p>
        </Link>
        <Link to='/login'>
          <p>login</p>
        </Link>
      </div>

      )}

      {data && data.map((elem, i) => (
        <div key={i}>
          <h2>{elem.clinica_name}</h2>
          <p>{elem.clinica_address}</p>
          <p>{elem.clinica_phone_number}</p>

          <h1>Add service</h1>

          <div>
            <form onSubmit={(e) => {
              e.preventDefault()
            }}>
              <select defaultValue='Med services' name="med_ser" onChange={(e) => setSelect(e.target.value)}>
                <option value={null}>Select service</option>
                {medService && medService.map((med, i) => (
                  <option key={i} value={med.m_service_name}>{med.m_service_name}</option>
                ))}
              </select>

              <select>
                {select && subData.map((elem, i) => (
                  select === elem.m_service_name ? <option value={elem.sub_m_service_name} key={i}>{elem.sub_m_service_name}</option> : null
                ))}
              </select>

              <label htmlFor="t_">enter text</label>
              <textarea id='t_' name="t_area" cols="50" rows="10" placeholder='enter description' onChange={(e) => setText(e.target.value)}></textarea>
              <input type="text" name='text' autoComplete='off' placeholder='enter cost service' onKeyUp={(e) => setCost(e.target.value)} required/>
              <button>press</button>
            </form>
          </div>
          <Link to='/'>
          <p>home</p>
          </Link>
          <Link to='/login'>
            <p>login</p>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Clinica