import React, { Component} from 'react';
import { connect } from 'react-redux';
import { searchBook } from '../actions';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.searchBook(event.target.value)
  }
  render() {
    return (
      <form className="col-sm-4 col-md-offset-2">
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            value={this.props.search}
            onChange={this.handleChange}
            className="form-control"
            />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
})

export default connect(mapStateToProps, { searchBook })(SearchForm);
