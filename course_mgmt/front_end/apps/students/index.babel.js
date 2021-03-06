var React = require('react')
var createStore = require('../redux/store.babel.js')
var actions = require('./actions.babel')
var Reducer = require('./reducer.babel')
var Controller = require('../redux/controller.jsx')
var Students = require('./components/controller.jsx')

module.exports = () => {
	let store = createStore(Reducer)

	store.dispatch(actions.showStudents())

	return React.createElement(Controller, {
		actions,
		store,
		component: Students,
	})
}
