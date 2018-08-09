import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component{

    render(){
        if(!this.props.user){
            return(<h3>Plase select user</h3>)
        }
        return(
                <div>
                    <h3>{this.props.user.name}</h3>
                    <h3>{this.props.user.last}</h3>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        user : state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);