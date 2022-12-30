const Header = ({name}) => {
  return(<>
  <h1>{name}</h1>
  </>)
}

const Total = ({ exercises }) => <p>Number of exercises {exercises}</p>;

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part, i) => (
    <Part key={i} part={part.name} exercises={part.exercises} />
  ));


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  console.log(course.name)

  // const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      {/* <Total exercises={total} /> */}
    </>
  );
}

export default App
