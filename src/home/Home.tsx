import Navigation from '../route/Navigation'
import React from 'react'

export default class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Navigation />
                <h3>This is the home page brah</h3>
            </div>
        )
    }
}
