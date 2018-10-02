import React, { Component } from 'react'

export default class Day extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',

        }
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
        let currentYear = this.props.year;
        if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0) {
            MONTH_DAYS[1] = 29;
        }
        return MONTH_DAYS[month];
    }

    getDayText = (line, weekIndex, weekDay, monthDays) => {
        var number = line * 7 + weekIndex - weekDay + 1
        if (number <= 0 || number > monthDays) {
            return <span>&nbsp;</span>
        }
        return number;
    }

    handleDayClick = () => {

    }

    render() {

        let monthDays = this.getCurrentMonthDays(this.props.month);

        let weekDay = this.getWeeksByFirstDay(this.props.year, this.props.month);
        let index= this.props.index;

        return (
            <td key={index} onClick={this.handleDayClick.bind(this)}/*style={{color: this.checkToday(key, index, weekDay, monthDays) ? 'red' : '#000'}}*/>
                {this.getDayText(this.props.number, index, weekDay, monthDays)}
            </td>
        )
    }
}
