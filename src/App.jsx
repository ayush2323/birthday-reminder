import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import Data from './Data'
import List from './List'

function App() {

    const [people, setPeople] = useState(Data);

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthday today</h3>
                <List people={people}/>
                <Button onClick={() => setPeople([])}>Clear All</Button>
            </section>
        </main>
    )
}

export default App;