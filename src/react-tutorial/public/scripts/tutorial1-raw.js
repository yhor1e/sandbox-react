var CommentBox = React.createClass({
  displayName: 'CommnetBox',
  render: function() {
    return (
      React.createElement(
        'div', {className, 'commentBox'},
        'Hello, world: I am CommnetBox.'
      )
    );
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
