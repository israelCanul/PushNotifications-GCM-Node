var React = ('react');
var Router = ('react-router');
// componentes
var App = React.createClass({
		 render() {
		    return (
		      <Layout { ...this.props }>
		        <main role="application" className="App" id="app">
		          {/* Esta es la parte más importante, acá react-router va inicilizarse
		              y a cargar las vistas de cada ruta */}
		          <Router.RouteHandler { ...this.props } />
		        </main>
		      </Layout>
		    );
		  }
	})
var Home = React.createClass({
  render() {
    return (
      <header>
        <h1>{ this.props.title }</h1>
        {/* este link es para que react-router funcione como una SPA */}
        <Link to="home">Home</Link>
      </header>
    );
  }
});

// configuramos nuestras rutas
var routes = (
  <Router.Route path='/' handler={ App }>
    <Router.DefaultRoute name='home' handler={ Home } />
  </Router.Route>
);

module.exports = routes;