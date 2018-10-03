import React, { Component } from 'react'
import Week from './Week';

const WEEK_NAMES = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']

const LINES = [1, 2, 3, 4, 5, 6]

export default class Month extends Component {

    render() {
        return (
            <div>
                <table cellPadding={0} cellSpacing={0} className="table">
                <caption>{this.props.monthName}</caption>
                    <thead>
                        <tr>
                            {
                                WEEK_NAMES.map((week, key) => {
                                    return <td key={key}>{week}</td>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            LINES.map((l, key) => {
                                return <Week line={l} number={key} key={key} month={this.props.month} year={this.props.year} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
