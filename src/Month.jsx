import React, { Component } from 'react'

const WEEK_NAMES = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']

const LINES = [1, 2, 3, 4, 5, 6]

export default class Month extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getDayText = (line, weekIndex, weekDay, monthDays) => {
        var number = line * 7 + weekIndex - weekDay + 1
        if (number <= 0 || number > monthDays) {
            return <span>&nbsp;</span>
        }
        return number;
    }

    getDateByYearMonth = (year, month, day = 1) => {
        var date = new Date();
        date.setFullYear(year);
        date.setMonth(month, day);
        return date;
    }

    getWeeksByFirstDay = (year, month) => {
        var date = this.getDateByYearMonth(year, month);
        return date.getDay();
    }

    getCurrentMonthDays = (month) => {
        let MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let currentYear = this.state.year;
        if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0) {
            MONTH_DAYS[1] = 29;
        }
        return MONTH_DAYS[month];
    }

    render() {

        let monthDays = this.getCurrentMonthDays(this.props.month);
        let weekDay = this.getWeeksByFirstDay(this.props.year, this.props.month);

        return (
            <table border={0} cellPadding={0} cellSpacing={0} className="table">
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
                            return <tr key={key}>
                                {
                                    WEEK_NAMES.map((week, index) => {
                                        return <td key={index} /*style={{color: this.checkToday(key, index, weekDay, monthDays) ? 'red' : '#000'}}*/>
                                            {this.getDayText(key, index, weekDay, monthDays)}
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        )
    }
}
