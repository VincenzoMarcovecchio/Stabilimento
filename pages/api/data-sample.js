

export default function handler(req, res) {


    res.status(200).json({
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
    })
}
