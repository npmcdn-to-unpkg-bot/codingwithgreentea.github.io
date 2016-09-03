var jsonData = [{"username":"ndburrus","img":"https://avatars.githubusercontent.com/u/15148847?v=3","alltime":1739,"recent":789,"lastUpdate":"2016-08-30T23:49:21.903Z"},{"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":2646,"recent":734,"lastUpdate":"2016-08-30T23:49:29.249Z"},{"username":"coffeebeanzz","img":"https://avatars.githubusercontent.com/u/19631203?v=3","alltime":749,"recent":284,"lastUpdate":"2016-08-30T17:45:18.921Z"}];

var List = React.createClass({
  render: function() {
    return (
      <ul>
        <ListItem data={this.props.data} />
      </ul>
    );
  }
});

var ListItem = React.createClass({
  render: function() {
    var item = this.props.data.map(function(val) {
      return (
        <li>{val.img}</li>
      );
    });
    return (
      <div>
        {item}
      </div>
    );
  }
});

ReactDOM.render(
  <List data={jsonData} />,
  document.getElementById('container')
);
