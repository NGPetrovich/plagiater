import React from 'react';
import Calendar from './components/Calendar'

const style = {
	position: "relative",
	margin: "50px auto"
}

class App extends React.Component {
    onDayClick = (day) => {
        alert(day);
    }

    render() {
        return (
            <div className="App">
                <Calendar style={style} width="302px" 
					onDayClick={(e, day)=> this.onDayClick(e, day)}/>
            </div>
        );
    }
}

export default App;
