import React, { Component } from 'react'
import axios from 'axios';
import TableRow from './TableRow';

const API='https://stream-restaurant-menu-svc.herokuapp.com/'
const DESCRIPTION = 'item?category='; // TODO

export default class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isLoading: false,
            error : null,
        };

    }

    componentDidMount() {
        this.setState({isLoading: true});

        axios.get(API + DESCRIPTION + this.props.value.short_name)
            .then(result => this.setState({
                categories: result.data,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }))
    }


  render() {
    const categories = this.props.value;
    
    return (
      <div className= "description"> 
        <table>
            <thead>
                <tr>
                    <th/>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.categories.map((category) =>{
                        return(
                            <TableRow
                            key = {category.id}
                            name={category.name}
                            description = {category.description}
                            />
                    )})     
                }
            </tbody>
        </table>
      </div>
    )
  }
}
