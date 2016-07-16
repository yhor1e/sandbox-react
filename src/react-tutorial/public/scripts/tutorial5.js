var CommentList = React.createClass({
  render: function() {
    return(
        <div className="commnetList">
          <Comment author="Pete Hunt"> This is one commnet</Comment>
          <Comment author="Jordan Walke"> This is *another* commnet</Comment>
        </div>
    )
  }
});
