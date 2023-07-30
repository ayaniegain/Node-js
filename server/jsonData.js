const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    location: 'New York',
    isAdmin: false,
  };
const cvtdata=JSON.stringify(person)
  console.log(cvtdata)
  const objectData=JSON.parse(cvtdata)
  console.log(objectData)
  