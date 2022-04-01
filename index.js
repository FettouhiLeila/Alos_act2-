const express = require('express')
const app = express()
const Donneurs = require('db.json')

// Middleware
app.use(express.json())

app.get('/Donneurs', (req,res) => {
    res.status(200).json(Donneurs)
})

app.get('/Donneurs/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const Donneur = Donneurs.find(Donneur => Donneur.id === id)
    res.status(200).json(Donneur)
})

//AJOUTER UN DONNEUR
app.post('/Donneurs', (req,res) => {
  Donneurs.push(req.body)
  res.status(200).json(Donneurs)
})

//SUPPRIMER UN DONNEUR (APRES AVOIR DONNE DU SANG)
app.delete('/Donneurs/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let Donneur = Donneurs.find(Donneur => Donneur.id === id)
  Donneurs.splice(Donneurs.indexOf(Donneur),1)
  res.status(200).json(Donneurs)
})

//AFFICHER UN DONNEUR SELON SON GROUPE SANGUIN
app.get('/Donneurs', (req,res) => {
  res.status(200).json(Donneurs)
})

app.get('/Donneurs/:id', (req,res) => {
  const groupe_sanguin = parseInt(req.params.groupe_sanguin)
  const Donneur = Donneurs.find(Donneur => Donneur.id === id)
  res.status(200).json(Donneur) 
})

app.listen(8080, () => {
    console.log('Serveur à l ecoute')
  })
