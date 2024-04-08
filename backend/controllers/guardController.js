const guards = [
    {
        'id' : 1,
        'name' : 'liann',
        'rank' : 'major',
        'years' : '2',
        'active' : true
    },

    {
        'id' : 2,
        'name' : 'erica',
        'rank' : 'general',
        'years' : '3',
        'active' : true
    },

    {
        'id' : 3,
        'name' : 'reyes',
        'rank' : 'iron',
        'years' : '5',
        'active' : false
    }
]

//get All
module.exports.guards = (req, res) => {
    res.json({'GUARDS' : guards})
};

//get specific guard with id
module.exports.guard = (req, res) => {
    const {id} = req.params

    console.log(id)
    const matchingGuard = guards.filter(
        (guard) => guard.id === parseInt(id)
    )

    if (matchingGuard.length === 0) {
        res.status(404).json({'error' : `Guard with ${id} not found`})
    }

    else {
        res.status(200).json({'guards' : matchingGuard[0]})
    }
}

//get guard with id, rank, years of service
module.exports.searchGuard = (req, res) => {
    const {id, rank, years} = req.query
    console.log(id, rank, years)

    const matchingGuard = guards.filter (
        (g) => g.id === parseInt(id) && g.rank === (rank) && g.years === (years)
    )

    if (matchingGuard.length === 0) {
        res.status(404).json({'error' : `guard with ${id}, ${rank}, and ${years} not found`})
    }

    else {
        res.status(200).json({'found' : matchingGuard[0]})
    }
}

//delete guard with id
module.exports.deleteGuard = (req, res) => {
    const { id } = req.params
    const index = guards.findIndex(guard => guard.id === parseInt(id));

   

    if (index === -1)
    {
        res.status(400).json({ 'error' : `Guard with ID ${id} not found `})
    }

    else {
        const deleteguard = guards[index];
        guards.splice(index, 1);
        res.status(200).json({ 'deleted guard' : deleteguard[0]});
    }
}
