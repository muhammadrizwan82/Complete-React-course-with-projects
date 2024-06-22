import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function MyApp() {
  return (
    <div>
      <h1>Customer App</h1>
      <App />
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   }, children: 'Click here'
// }

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com', target: '_blank'
  },
  'Google'

)
const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
