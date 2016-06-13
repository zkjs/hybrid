import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemDetail extends Component {
    render() {
        if (!this.props.item) {
            return <div>Select a item.</div>;
        }

        return (
            <div>
                <h4>Details for:</h4>
                <div>UserName: {this.props.item.login}</div>
                <div>github: <a href={this.props.item.html_url}>{this.props.item.html_url}</a></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.activeItem
    };
}

export default connect(mapStateToProps)(ItemDetail);
