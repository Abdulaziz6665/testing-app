import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Comp from '../Comp/Comp'
import './home.css'

function Home (props) {
  
  const [data, setData] = useState([])
  const [subData, setSubData] = useState([])

  useEffect(() => {

    ;(async () => {

      const res = await fetch('http://localhost:5000/')
      const json = await res.json()

      setData([...json[0]])
      setSubData([...json[1]])
    })()

  }, [])


  return (
    <>
      <div className='main'>
        <div className='main2'>
          <h1>Clinica Services</h1>
          <ul>
            {data && data.map((data, i) => (
              <li key={i}>
                <Link to={`/${data.m_service_id}`}>
                  <p>{data.m_service_name}</p>
                </Link>

                {subData.map((subdata, idx) => (
                  <Link  key={idx} to={`/${subdata.m_service_name}/${subdata.sub_m_service_id}`}>
                    {data.m_service_id === subdata.m_service_id ? <div>{subdata.sub_m_service_name}</div> : null}
                  </Link>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div className='main2'>
            <Comp dataa={props.match.params}/>
        </div>
        <Link to='/login'>
          <h3>login</h3>
        </Link>

      </div>
    </>
  )

}

export default Home