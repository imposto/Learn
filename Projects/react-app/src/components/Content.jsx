import React from 'react'
import './Content.css'

export default props =>

    <React.Fragment>

        <main className="content">
            <h1 className="display-1">Content</h1>
            {props.children}
        </main>


    </React.Fragment>
