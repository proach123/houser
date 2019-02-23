module.exports = {
    getHouse: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(response =>{
      res.status(200).send(response)
    })
},


     createHouse: (req, res) => {
        
        const db = req.app.get('db');
    const { name, address, city, state, zipcode } = req.body;
        console.log(req.body)
        db.create_house(name,address,city,state,zipcode).then(response=>{
        res.status(200).send(response)
        })
    },
    deletehouse: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
    
        db.delete_house([id]).then(response => {
          res.status(200).send(response);
        });
    }
    
}