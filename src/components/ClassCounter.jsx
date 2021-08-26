import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.forEslint = '';
    }

    render() {
        return (
            <div>
                <h1>This is Class Counter - {this.props.counter}</h1>
                <button onClick={() => this.props.increment()}>Increment this Class Counter</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.class
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'classIncrement'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);