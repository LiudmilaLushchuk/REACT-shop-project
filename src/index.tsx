import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

interface TitleProps {
    title: string
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title} component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
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
            <Title title="App" />
            <Title title="React" />
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
