import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// JSX
const app = (
    <div>
        <h1 id="text">Hello App</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla
            possimus commodi ea animi, numquam culpa consectetur cumque sapiente
            eaque eos beatae temporibus delectus quas eius ipsam explicabo
            adipisci ducimus!
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
