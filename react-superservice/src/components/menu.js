import React, { Component } from 'react';

export default class Menu extends Component {

    componentWillMount() {
        this.state = { focused: 0 };
    }

    itemSelected (index){
        this.setState({focused: index});
    }

    render () {

        var self = this;

        return (
            <div className="menu">
                <ul>{ this.props.items.map(function(m, index){

                    var style = '';

                    if(self.state.focused == index){
                        style = 'focused';
                    }
                    return <li className={style}
                               onClick={self.itemSelected.bind(self, index)}
                               key={m}
                    >{m}</li>;
                }) }
                </ul>
            </div>
        );
    }
};
