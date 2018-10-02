import React, { Component } from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default class Day extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'Default',
            modalIsOpen: false,
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
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
        this.setState({
            modalIsOpen: true
        })
    }

    // setCategory = (type) => {
    //     this.setState({
    //         category: type
    //     })
    // }

    handleCategorySelected = (type) => {
        
        this.setState({
            category: type,
            modalIsOpen:false
        })


    }

    getCategoryColor = (type) => {
        switch (type) {
            case 'Holiday':
                return '#00FFFF'
            case 'Birthday':
                return '#FAEBD7';
            case 'Busy':
                return '#A52A2A';
            case 'Anniversary':
                return '#8A2BE2';
            default:
                break;
        }
    }

    render() {

        let monthDays = this.getCurrentMonthDays(this.props.month);

        let weekDay = this.getWeeksByFirstDay(this.props.year, this.props.month);
        let index = this.props.index;

        let type = this.state.category;

        let color = this.getCategoryColor(type);

        return (
            <React.Fragment>
                <td key={index} onClick={this.handleDayClick.bind(this)} style={{backgroundColor: color}}>
                    {this.getDayText(this.props.number, index, weekDay, monthDays)}
                </td>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal.bind(this)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <p onClick={this.handleCategorySelected.bind(this, 'Holiday')}>Holiday</p>
                    <p onClick={this.handleCategorySelected.bind(this, 'Birthday')}>Birthday </p>
                    <p onClick={this.handleCategorySelected.bind(this, 'Busy')}>Busy</p>
                    <p onClick={this.handleCategorySelected.bind(this, 'Anniversary')}>Anniversary</p>
                    <button onClick={this.handleCategorySelected.bind(this, 'Default')}>Remove</button>
                </Modal>
            </React.Fragment>
        )
    }
}
