import useSWR from 'swr'
import { useState } from "react"


export default function Index() {

  const [active, setActive] = useState(0)

  const [items, setItems] = useState([
      {
        "Nome": "Questa settimana",
        "quantita": 1
      },
      {
        "Nome": "Questo mese",
        "quantita": 2
      },
      {
        "Nome": "Qesto anno",
        "quantita": 1
      },
      {
        "Nome": "Personalizzato",
        "quantita": 1
      }
    ]
  )

  console.log(items)

  return (
    <>
      <ul class="d-flex flex-wrap fs-8 justify-content-end list-group list-group-horizontal">
        {items.map((item, i) => (

          <li key={item.Nome} onClick={() => setActive(i)} className={`${active === i && "active"}  list-group-item ms-2 mt-2 rounded-pill`}> <i className="bi bi-calendar-event me-3"></i>{item.Nome}</li>
        ))}

      </ul>
      <h2>ciao</h2>
    </>
  )
}
