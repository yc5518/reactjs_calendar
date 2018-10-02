import React, { Component } from 'react'
import Month from './Month';

require('./Layout.css')

const MONTHS_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']

export default class Year extends Component {

    constructor(props) {
        super(props);
        this.state = {
            month: 0,
            year: 0,
            currentDate: new Date()
        }
    }

    componentWillMount() {
        this.setCurrentYearMonth(this.state.currentDate)
    }

    setCurrentYearMonth = (date) => {
        var month = this.getMonth(date)

        var year = this.getFullYear(date)

        this.setState({
            month,
            year
        })
    }

    getMonth = (date) => {
        return date.getMonth()
    }

    getFullYear = (date) => {
        return date.getFullYear()
    }

    handleYearChange = (yearChange) => {
        this.setState({
            year: this.state.year + yearChange
        })
    }

    handleTodayClick = () => {
        this.setCurrentYearMonth(this.state.currentDate);
    }

    render() {
        return (
            <div>
                <p className="caption-header">
                    <span className="arrow" onClick={this.handleYearChange.bind(this, -1)}>&#60;</span>
                    <span>{this.state.year}</span>
                    <span className="arrow" onClick={this.handleYearChange.bind(this, 1)}>&gt;</span>
                </p>
                <p onClick={this.handleTodayClick.bind(this)}>Today</p>
                <div>{MONTHS_NAMES.map((month, key) => {
                    return (
                        <React.Fragment key={key}>
                            <p style={{ align: 'center' }}>{MONTHS_NAMES[key]}</p>
                            <Month month={key} year={this.state.year} />
                        </React.Fragment>

                    )
                }
                )}
                </div>
            </div>
        )
    }
}
