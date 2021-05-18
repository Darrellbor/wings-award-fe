import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as urls from 'shared/routes.json';

import WingsAwardLogo from 'assets/images/wings-logo.svg';
import GoBackIcon from 'components/Icons/General/Goback';
import CategoryIcon from 'components/Icons/Categories';
import categoryInterface from 'types/category';
import Button from 'components/Button';

interface CategoryProps extends RouteComponentProps {
  location: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: {
      category: categoryInterface;
      prev: categoryInterface | null;
      next: categoryInterface | null;
    };
  };
}

export class Category extends Component<CategoryProps> {
  render(): JSX.Element {
    const { location, history } = this.props;
    if (!location.state) history.push(urls.Root);
    const { category } = location.state;

    return (
      <div className="Category -body">
        <div className="Category -body-inner">
          <div className="Category -logo">
            <img src={WingsAwardLogo} alt="Wings Award" />
          </div>

          <div className="Category -row">
            <div className="Category -col-left">
              <div className="Category -title">
                {' '}
                <GoBackIcon onClick={() => history.goBack()} /> Award Category
              </div>

              <div className="Category -describe">
                <CategoryIcon category={category.name} />
                <h3>{category.name}</h3>
              </div>

              <div className="Category -description">
                <h3>Description</h3>

                <p>{category.description}</p>
              </div>
            </div>

            <div className="Category -col-right">
              <div className="Category -nominee-top">
                <div className="Category -title">Nominees</div>
                <Button className="Button-brand">Cast your vote</Button>
              </div>

              <div className="Category -nominee-list">
                {category.nominees &&
                  category.nominees.length > 0 &&
                  category.nominees.map((nominee, idx) => {
                    return (
                      <div className="Category -nominee-item" key={nominee._id}>
                        <div className="Category -nominee-item-row">
                          <div className="Category -nominee-item-img">
                            <img src={nominee.image} alt={`Nominee ${idx + 1}`} />
                          </div>

                          <div className="Category -nominee-item-text">
                            {nominee.name}
                            {nominee.socialHandle && `: ${nominee.socialHandle}`}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="Category -footer">
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

export default Category;
