import { useState } from 'react'

const Persons = ({ name }) => {
  return (
    <li key='name.id'>{name.name}</li>
  )
}

const App = ( props ) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1}
  ])
  const [newPerson, setNewPerson] = useState('')
  // const [showAll, setShowAll] = useState(true)


  const addPerson = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newPerson,
      id: persons.length + 1
    }

    const alreadyExists = persons.some((person) => person.name === newPerson);

    if(alreadyExists) {
      alert(newPerson + ' is already added to phonebook')}
    else {
      setPersons(persons.concat(noteObject))
      setNewPerson('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  // const personsToShow = showAll
  //   ? persons
  //   : persons.filter(note => note.important === true)

  return(
    <div>
      <h2>Phonebook</h2>
      {/* <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> */}
      {/* <ul>
        {personsToShow.map(person =>
          <Persons key={person.id} note={person} />
        )}
      </ul> */}
      <form onSubmit={addPerson}>
        <input
            value={newPerson}
            onChange={handleNameChange}
          />
        <button type="submit">save</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Persons key={person.id} name={person} />
        )}
      </ul>
    </div>
  )
  }

export default App
