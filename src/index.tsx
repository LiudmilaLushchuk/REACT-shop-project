import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
import { Content } from './Content'

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={1} />
            <Content
                text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                A laudantium tempore, voluptas blanditiis possimus pariatur 
                atque reprehenderit nemo debitis dignissimos voluptatem 
                quisquam itaque nostrum? Pariatur commodi libero fugit 
                praesentium dignissimos!"
                text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                A laudantium tempore, voluptas blanditiis possimus pariatur 
                atque reprehenderit nemo debitis dignissimos voluptatem 
                quisquam itaque nostrum? Pariatur commodi libero fugit 
                praesentium dignissimos!"
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
