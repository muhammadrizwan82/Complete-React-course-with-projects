import './App.css'
import Card from './components/Card'

function App() {

  let user = {
    id: 1,
    name: "Aisha Rizwan",
    age: "07 Years"
  }
  let users = [{
    id: 1,
    name: "Aisha Rizwan",
    age: "07 Years",
    profileImage: "https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=600"

  }, {
    id: 2,
    name: "Maieyda Rizwan",
    age: "12 Years",
    profileImage: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  }]

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="bg-green-500 text-black rounded-xl mb-4">Tailwind Test</h1>
        <div className="space-y-4">
          {users.map((user, index) => (
            <Card id={user.id} name={user.name} age={user.age} profileImage={user.profileImage} profileUrl={'https://www.google.com?id=' + user.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
