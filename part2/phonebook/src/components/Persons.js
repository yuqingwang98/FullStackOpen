import Person from './Person'

const Persons = ({ persons }) => {
  return (
    <div>
      <ul>
        {persons
          .map(person =>
            <Person
              key={person.id}
              person={person}
            />
        )}
      </ul>
    </div>
  )
}

export default Persons
