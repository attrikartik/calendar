import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Modal from './Modal'
class  Calendar extends Component  {

  state = {
    events : {},    
    currentDate: null,
    showModal: false
  }

  renderDay = day => {
    const date = day.getDate();
    const dateStyle = {
      position: 'absolute',
      color: 'black',
      bottom: 0,
      right: 0,
      fontSize: 20,
    }

    const eventStyle = { fontSize: '0.8em', textAlign: 'left', color:'red' };
    const cellStyle = {
      height: 50,
      width: 80,
      position: 'relative',
    }

  return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {this.state.events[date] &&
          this.state.events[date].map((name, i) => (
            <div key={i} style={eventStyle}>
              {name} 
            </div>
          ))}
      </div>
    )
  } 

  createEvent = day => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      currentDate: day.getDate()
    }))
  }

  eventHandler = ( title, description, guests) => {
    this.setState((prevState) => ({
    showModal: !prevState.showModal,
    }))
    
    const date = this.state.currentDate
    const events =  this.state.events
    events[date] = [title,description,guests]
    this.setState({ events: events })      
  }
   
  render () {
    return(
      <React.Fragment>
        { this.state.showModal && <Modal eventHandle={this.eventHandler}/>}
        <DayPicker
         canChangeMonth={true}
         className="Events"
         renderDay={this.renderDay}
         onDayClick={this.createEvent}
        />
      </React.Fragment>
    )
  }
}

export default Calendar