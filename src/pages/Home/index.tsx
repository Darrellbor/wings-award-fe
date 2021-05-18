import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'shared/axios';

import * as urls from 'shared/routes.json';
import { checkValidity } from '../../shared/validations';

import WingsAwardLogo from 'assets/images/wings-logo.svg';
import CategoryIcon from 'components/Icons/Categories';
import Input from '../../components/Input';
import Modal from 'components/Modal';
import Button from 'components/Button';
import categoryInterface from 'types/category';

interface HomeState {
  categories: categoryInterface[];
  isModalOpen: boolean;
  voteForm: {
    email: {
      value: string;
      valid: boolean;
      focused: boolean;
      messageClassName: string;
    };
  };
  formIsValid: boolean;
}

export class Home extends Component<RouteComponentProps, HomeState> {
  state = {
    categories: [],
    isModalOpen: false,
    voteForm: {
      email: {
        value: '',
        valid: false,
        focused: false,
        messageClassName: 'none',
      },
    },
    formIsValid: false,
  };

  async componentDidMount(): Promise<void> {
    const categories = await axios.get('/category/v1/categories');
    this.setState({ categories: categories.data.data });
  }

  async componentDidUpdate(): Promise<void> {
    const categories = await axios.get('/category/v1/categories');
    this.setState({ categories: categories.data.data });
  }

  toggleModal = (): void => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleInputOnChange = (
    event: {
      target: {
        value: string;
      };
    },
    elementId: 'email',
    validations: { [key: string]: string | number | boolean }
  ): void => {
    const value = event.target.value;

    const updatedFormElement = {
      ...this.state.voteForm[elementId],
      value,
      valid: checkValidity(value, validations),
      messageClassName:
        !checkValidity(value, validations) && value !== '' ? 'input__message--error' : 'none',
    };

    const updatedForm = {
      ...this.state.voteForm,
      [elementId]: updatedFormElement,
    };

    let formIsValid = true;
    for (const elementId in updatedForm) {
      formIsValid = updatedForm[elementId as 'email'].valid && formIsValid;
    }

    this.setState({
      voteForm: updatedForm,
      formIsValid: formIsValid,
    });
  };

  handleInputFocus = (name: 'email', updatedState: { focused: boolean }): void => {
    const updatedNameObject = {
      ...this.state.voteForm[name],
      ...updatedState,
    };

    const updatedForm = {
      ...this.state.voteForm,
      [name]: updatedNameObject,
    };

    this.setState({
      voteForm: updatedForm,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOnSubmit = (e: any): void => {
    e.preventDefault();
  };

  render(): JSX.Element {
    const { categories, isModalOpen, voteForm, formIsValid } = this.state;
    const { history } = this.props;

    return (
      <div className="Home -body">
        <div className="Home -body-inner">
          <div className="Home -logo">
            <img src={WingsAwardLogo} alt="Wings Award" />
          </div>

          <div className="Home -top-row">
            <div className="Home -title">Award Categories</div>
            <Button className="Button-brand" onClick={() => this.toggleModal()}>
              Submit Votes
            </Button>
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

        <Modal isOpen={isModalOpen} onClose={() => this.toggleModal()}>
          <div className="Home -modal">
            <div className="Home -modal-top">
              <h2>Final Vote -- Wings Award 2020</h2>
              <small>
                Note: Please reconfirm your choices below as you cannot modify or revote beyond this
                point.
              </small>
            </div>

            <div className="Home -modal-categories">
              <div className="Home -modal-category">
                <div className="Home -modal-category-icon">
                  <CategoryIcon color="#FE77FC" category="Technology" />
                </div>
                <div className="Home -modal-category-body">
                  <div className="Home -modal-category-title">Activism and Community Action</div>
                  <br />
                  <div className="Home -modal-category-nominated">
                    <b>Nominated:</b> No One
                  </div>
                </div>
              </div>

              <div className="Home -modal-category">
                <div className="Home -modal-category-icon">
                  <CategoryIcon color="#FE77FC" category="Technology" />
                </div>
                <div className="Home -modal-category-body">
                  <div className="Home -modal-category-title">Activism and Community Action</div>
                  <br />
                  <div className="Home -modal-category-nominated">
                    <b>Nominated:</b> No One
                  </div>
                </div>
              </div>

              <div className="Home -modal-category">
                <div className="Home -modal-category-icon">
                  <CategoryIcon color="#FE77FC" category="Technology" />
                </div>
                <div className="Home -modal-category-body">
                  <div className="Home -modal-category-title">Activism and Community Action</div>
                  <br />
                  <div className="Home -modal-category-nominated">
                    <b>Nominated:</b> No One
                  </div>
                </div>
              </div>
            </div>

            <form name="SubmitVote" onSubmit={this.handleOnSubmit}>
              <Input
                label="Your Email"
                attributes={{
                  type: 'email',
                  name: 'email',
                  placeholder: 'you@example.com',
                  required: true,
                  theme: 'default',
                  value: voteForm.email.value,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange: (event: any) =>
                    this.handleInputOnChange(event, 'email', {
                      required: true,
                      isEmail: true,
                    }),
                  onFocus: () =>
                    this.handleInputFocus('email', {
                      focused: true,
                    }),
                  onBlur: () =>
                    this.handleInputFocus('email', {
                      focused: false,
                    }),
                }}
                hasError={!voteForm.email.valid}
                focused={voteForm.email.focused}
                message={
                  !voteForm.email.valid && !voteForm.email.focused && voteForm.email.value !== ''
                    ? 'Your email is required and must be valid'
                    : ''
                }
                messageClassName={voteForm.email.messageClassName}
              />

              <div className="Home -modal-categories-btn">
                <Button
                  className="Button-brand"
                  disabled={!formIsValid}
                  style={{ backgroundColor: '#ff50e828' }}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Home;
