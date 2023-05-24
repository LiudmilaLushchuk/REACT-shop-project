import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// JSX
// const app = (
//     <div>
//         <h1 id="text">Hello App</h1>
//         <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla
//             possimus commodi ea animi, numquam culpa consectetur cumque sapiente
//             eaque eos beatae temporibus delectus quas eius ipsam explicabo
//             adipisci ducimus!
//         </p>
//     </div>
// )

// React Component
const Title = () => {
    return <h1>Hello App component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                placeat, illum ut ab perferendis saepe consectetur aliquid nemo
                vero officia a optio ratione ex corrupti, enim asperiores,
                dolores accusantium pariatur?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                voluptatem consectetur esse accusamus facere laboriosam animi
                aperiam cupiditate facilis commodi ex sapiente ullam, architecto
                in libero optio, ab alias. Praesentium?
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
