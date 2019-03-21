import React, { Component } from 'react'
import axios from 'axios';
import Description from './Description';

const API='https://stream-restaurant-menu-svc.herokuapp.com/'
const ITEMS = 'category';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            items : [],
            category : null,
            isLoading: false,
            error : null,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        axios.get(API + ITEMS)
            .then(result => this.setState({
                items: result.data,
                category: null,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                category: null,
                isLoading: false
            }))
    }

    handleClick = (e, category) => {
        e.preventDefault();
        this.setState({category: category});
        return;
    }

   
  render() {
    const {items, category, isLoading, error} = this.state;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p> Error...</p>;
    }

    if (category) {
        return(
            <div className = "description">
                <Description value={category}/>
            </div>
        );

    }

    return (
        <ul>
            {items.map((item) =>
            <li key={item.id}>
                <a href='#' onClick={(e) => this.handleClick(e, item)}>{item.name + '-' + item.short_name}
                </a>
            </li>
            )}
        </ul>

    );
  }
}



