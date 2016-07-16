var Comment = React.createClass({

  render: function() {
    var md = new Remarkable();
    return(
        <div className"commnet">
          <h2 className="commnetAuther">
            {this.props.author}
          </h2>
          {md.render(this.props.children.toString())}
        </div>
    );
  }
});
