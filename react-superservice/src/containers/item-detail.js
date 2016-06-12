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
                <div>Title: {this.props.item.title}</div>
                <div>Pages: {this.props.item.pages}</div>
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
