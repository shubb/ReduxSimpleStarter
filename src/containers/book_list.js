import React, { Component } from 'react';
import { connect } from 'react-redux'


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} classname="list-group-item">{book.title}</li>
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
    //Whatever is returned will show up as props inside book list
    return {
        books: state.books
    };
}

var connectFunction = connect(mapStateToProps)
export default connectFunction(BookList);
