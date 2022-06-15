

export default function Cards() {

    const Items = {
        "menuitems": [
            {
                "Nome": "Aziende",
                "quantita": 1
            },
            {
                "Nome": "Stabilimenti",
                "quantita": 2
            },
            {
                "Nome": "Prodotti",
                "quantita": 1
            },
            {
                "Nome": "Lotti",
                "quantita": 1
            }
        ]
    }

    return (
        <div className="container ">
            <div className=" mt-4 row row-cols-1 row-cols-md-4 g-md-4 align-items-center justify-content-between">

                {Items.menuitems.map((item, index) => {
                    return (
                        <div className="mt-md-0 mt-3 row border p-4 rounded align-items-center justify-content-between">
                            <div className="col p-0">
                                <h3><b>{item.quantita}</b></h3>
                                <span>{item.Nome}</span>
                            </div>

                            <div className=" col p-0">

                                <i class="d-flex justify-content-end fs-1 bi bi-people-fill"></i>

                            </div>

                        </div>

                    )
                })
                }
            </div>
        </div>

    )



}

