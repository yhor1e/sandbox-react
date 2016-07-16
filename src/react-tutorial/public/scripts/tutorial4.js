var Comment = React.createClass({

  render: function() {
    return(
        <div className"commnet">
          <h2 className="commnetAuther">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
    );
  }
});
