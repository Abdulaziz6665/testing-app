import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Clinica() {
  const { user, pass } = JSON.parse(localStorage.getItem('data'))
  const [data, setData] = useState()

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


  return(
    <>
      {!data && (
        <div>
        <form>
          <input type="text" name='clinica' autoComplete='off' required />
          <input type="text" name='cli-name' autoComplete='off' required />
          <input type="text" name='cli-phone' autoComplete='off' required />
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