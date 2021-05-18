import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'shared/axios';

import * as urls from 'shared/routes.json';

import WingsAwardLogo from 'assets/images/wings-logo.svg';
import CategoryIcon from 'components/Icons/Categories';
import Button from 'components/Button';
import categoryInterface from 'types/category';

interface HomeState {
  categories: categoryInterface[];
}

export class Home extends Component<RouteComponentProps, HomeState> {
  state = {
    categories: [],
  };

  async componentDidMount(): Promise<void> {
    const categories = await axios.get('/category/v1/categories');
    this.setState({ categories: categories.data.data });
  }

  async componentDidUpdate(): Promise<void> {
    const categories = await axios.get('/category/v1/categories');
    this.setState({ categories: categories.data.data });
  }

  render(): JSX.Element {
    const { categories } = this.state;
    const { history } = this.props;

    return (
      <div className="Home -body">
        <div className="Home -body-inner">
          <div className="Home -logo">
            <img src={WingsAwardLogo} alt="Wings Award" />
          </div>

          <div className="Home -top-row">
            <div className="Home -title">Award Categories</div>
            <Button className="Button-brand">Submit Votes</Button>
          </div>

          <div className="Home -categories">
            {categories && categories.length > 0 ? (
              categories.map((category: categoryInterface, idx: number) => {
                return (
                  <div
                    className="Home -category"
                    key={category._id}
                    onClick={() =>
                      history.push({
                        pathname: `${urls.Category}/${category._id}`,
                        state: {
                          category,
                          prev: categories[idx - 1] ? categories[idx - 1] : null,
                          next: categories[idx + 1] ? categories[idx + 1] : null,
                        },
                      })
                    }>
                    <div className="Home -category-icon">
                      <CategoryIcon category={category.name} />
                    </div>

                    <div className="Home -category-title">{category.name}</div>
                  </div>
                );
              })
            ) : (
              <div className="Home -categories-loading">Loading...</div>
            )}
          </div>

          <div className="Home -footer">
            Designed and developed by{' '}
            <a href="https://idarrel.netlify.app/" rel="noopener noreferrer" target="_blank">
              Darrel Idiagbor
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
