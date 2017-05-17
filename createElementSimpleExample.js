var Button = function(props) {
	return (
  	<button>{props.text}</button>
  )
}

var Hello = React.createClass({
  render: function() {
    return <div>
    {[{text: "test"}, {text: "dwojeczka"}].map(function(item, i){
    	return React.createElement(Button, Object.assign({}, item, {key: i}))
    })}
    </div>
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
