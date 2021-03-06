import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem, fetchItems } from '../actions/index';
import { bindActionCreators } from 'redux';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    renderList() {
        if(this.props.items.length < 1) {
            return (<div className="loading-data">loading...</div>);
        }
        return this.props.items.map((item) => {
            return (
                <li
                    key={item.id}
                    onClick={() => this.props.selectItem(item)}
                    className="list-group-item">
                    {item.login}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of ItemList
    return {
        items: state.items
    };
}

// Anything returned from this function will end up as props
// on the ItemList container
function mapDispatchToProps(dispatch) {
    // Whenever selectItem is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ selectItem , fetchItems }, dispatch);
}

// Promote ItemList from a component to a container - it needs to know
// about this new dispatch method, selectItem. Make it available
// as a prop.
export default connect(mapStateToProps,  mapDispatchToProps )(ItemList);
