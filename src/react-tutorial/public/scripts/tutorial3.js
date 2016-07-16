var CommnetBox = React.createClass({
  render: function() {
    return(
        <div className="commnetBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
        </div>
    )
  }
})
