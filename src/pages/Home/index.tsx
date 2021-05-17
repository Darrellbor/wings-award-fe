import React, { Component } from 'react';
import axios from 'shared/axios';

import WingsAwardLogo from 'assets/images/wings-logo.svg';
import CategoryIcon from 'components/Icons/Categories';
import categoryInterface from 'types/category';

interface HomeState {
  categories: categoryInterface[];
}

export class Home extends Component<unknown, HomeState> {
  state = {
    categories: [],
  };

  async componentDidMount(): Promise<void> {
    const categories = await axios.get('/category/v1/categories');
    this.setState({ categories: categories.data.data });
  }

  render(): JSX.Element {
    const { categories } = this.state;

    return (
      <div className="Home -body">
        <div className="Home -body-inner">
          <div className="Home -logo">
            <img src={WingsAwardLogo} alt="Wings Award" />
          </div>

          <div className="Home -title">Award Categories</div>

          <div className="Home -categories">
            {categories &&
              categories.length > 0 &&
              categories.map((category: categoryInterface) => {
                return (
                  <div className="Home -category" key={category._id}>
                    <div className="Home -category-icon">
                      <CategoryIcon category={category.name} />
                    </div>

                    <div className="Home -category-title">{category.name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
