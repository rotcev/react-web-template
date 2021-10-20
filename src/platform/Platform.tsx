import React from 'react'
import Navigation from '../route/Navigation'

export default class Platform extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Navigation />
                <h3>This is the platform component</h3>
            </div>
        )
    }
}
