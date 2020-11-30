class LighteningCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    strikes : 0,
  };
    this.timerTick = this.timerTick.bind(this);
  }
  timerTick(){
   this.setState({
    strikes : this.state.strikes + 100
   });
  }
  
  componentDidMount(){
    setInterval(this.timerTick, 1000);
  }
  let count = this.state.strikes.toLocaleString();
  render(){
    return(<h1>{count}</h1>)
  }
}

class LighteningCounterDisplay extends React.Component{        
  render(){
    var divStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor : "black",
      padding : 40,
      fontFamily: "sans-serif",
      color:"#999",
      borderRadius: 10
    };
    return(
    <div style={divStyle}>
        <LighteningCounter/>
      </div>
    )
  }
}

ReactDOM.render(
  <LighteningCounterDisplay/>,
  document.getElementById('root')
);

