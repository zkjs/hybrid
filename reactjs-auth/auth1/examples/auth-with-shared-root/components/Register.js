import React from 'react'
import { withRouter } from 'react-router'
import auth from '../utils/auth.js'

const Register = React.createClass({
    getInitialState() {
        return {
            error: false
        }
    },

    handleSubmit(event) {
        event.preventDefault()

        const email = this.refs.email.value
        const pass = this.refs.pass.value

        auth.registerRequest(email, pass, (loggedIn) => {
            if (!loggedIn)
                return this.setState({ error: true })

            const { location } = this.props

            if (location.state && location.state.nextPathname) {
                this.props.router.replace(location.state.nextPathname)
            } else {
                this.props.router.replace('/')
            }
        })
    },

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label><input ref="email" placeholder="email"  /></label>
                <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
                <button type="submit">register</button>
                {this.state.error && (
                    <p>Bad login information</p>
                )}
            </form>
        )
    }

})

export default withRouter(Register)