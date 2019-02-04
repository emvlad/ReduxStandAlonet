var Tooltip = React.createClass({
  getInitialState: function() {
    return {
      opacity: false
    };
  },
  toggle: function() {
    var tooltipNode = ReactDom.findDomNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  },
  render: function() {
    var style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) - 30
    };
    return (
      <div style={{ display: "inline" }}>
        <span
          style={{ color: "blue" }}
          omMouseEnter={this.toggle}
          onMouseOut={this.toggle}
        >
          {this.props.children}
        </span>
        <div classnmae="tooltip bottom" style={style} role="tooltip">
          <div className="tooltip-arrow" />
          <div className="tooltip-inner">{this.props.text}</div>
        </div>
      </div>
    );
  }
});
