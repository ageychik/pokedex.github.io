import React from "react";
import { connect } from "react-redux";
import Header from  '../components/header/Header';
import {pokemonItem, pokemonList} from "../actions";

export const Hoc = (Components) => {
    const mapStateToProps = (state) => ({ state });
    const dispatchProps = { pokemonList, pokemonItem };

    class HOComponent extends React.Component{
        // componentDidUpdate(prevProps, prevState){
        //     console.log(prevProps, prevState)
        // }
        componentDidMount(){
            // this.props.pokemonList();
        }
        componentWillUnmount(){}
        render(){
            // const { state } = this.props;
            return (
                <div className='content'>
                    <Header/>
                    <Components {...this.props}/>
                </div>
            )
        }
    }

    return connect(mapStateToProps, dispatchProps)(HOComponent);
}