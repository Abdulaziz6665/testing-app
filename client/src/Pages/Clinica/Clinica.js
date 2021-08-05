import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Clinica() {
  const { user, pass } = JSON.parse(localStorage.getItem('data'))
  const [data, setData] = useState()
  const [submit, setSubmit] = useState()

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
        
        setData(json)
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
          
          setData(json)
        })()
        setSubmit(false)
      }

  }, [clinica, address, cliName, submit, user, pass])


  console.log(clinica, address, cliName)


  return(
    <>
      {!data && (
        <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          setSubmit(true)
        }}>
          <input type="text" name='clinica' autoComplete='off' required onKeyUp={(e) => setClinica(e.target.value)} />
          <input type="text" name='cli-address' autoComplete='off' required onKeyUp={(e) => setAddress(e.target.value)} />
          <input type="text" name='cli-phone' autoComplete='off' required onKeyUp={(e) => setCliName(e.target.value)} />
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
            <form>

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