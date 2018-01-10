import React, { Component} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { fetchCategories, selectCategory, fetchBooks } from '../actions';

class CategoriesSelector extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }
  handleChange = (option) => {
    this.props.fetchBooks(option);
    this.props.selectCategory(option);
  }
  render() {
  	const value = this.props.selectedCat;
    const options = this.props.categories.map(c => ({ value: c.id, label: c.name }));
    return (
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <Select
            name="categories"
            value={value}
            onChange={this.handleChange}
            options={options}
          />
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.all,
  selectedCat: state.categories.selected,
})

export default connect(mapStateToProps, { fetchBooks, fetchCategories, selectCategory })(CategoriesSelector);
