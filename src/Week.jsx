import React, { Component } from 'react'
import Day from './Day'

const WEEK_NAMES = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
export default class Week extends Component {

    render() {
        return (
            <tr>
                {
                    WEEK_NAMES.map((week, index) => {
                        return <Day number={this.props.number} index={index} key={index} month={this.props.month} year={this.props.year} />
                    })
                }
            </tr>

        )
    }
}
