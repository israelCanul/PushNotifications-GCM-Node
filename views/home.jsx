var React = require('react');
var Layout = require('./layout');

var Home = React.createClass({
  render() {
    return (
      <Layout title="Homepage">
        <h1>Hola mundo</h1>
      </Layout>
    );
  }
});

module.exports = Home;