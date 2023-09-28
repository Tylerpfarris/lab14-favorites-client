import React, { Component } from 'react'
import {} from '../api-utils'

export default class DetailsPage extends Component {
    state = {
        favorite: {
            name: '',
        }
    }

  

    render() {
        console.log(this.state)
        return (
            <div>
                details page
            </div>
        )
    }
}
