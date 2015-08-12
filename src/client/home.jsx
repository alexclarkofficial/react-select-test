var Select = require('react-select');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      options: [
        { name: "alex", id: 1 },
        { name: "heath", id: 2}
      ]
    };
  },

  render: function() {
    return (
      <div>
        <h1>This is the page</h1>

        <Select
            name="tags"
            ref="tags"
            options={this.state.people}
            value=""
            className="people"
            placeholder="Name a person" />
      </div>
    );
  }
});
