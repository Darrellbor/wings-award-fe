import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'shared/axios';

import * as urls from 'shared/routes.json';
import { RootState } from 'store';
import { fetchCategories, clearVotes } from 'store/actions';
import { IinitialState } from 'store/reducers/vote';
import { checkValidity } from '../../shared/validations';

import WingsAwardLogo from 'assets/images/wings-logo.svg';
import CategoryIcon from 'components/Icons/Categories';
import BadgeIcon from 'components/Icons/Badge';
import Input from '../../components/Input';
import Modal from 'components/Modal';
import Button from 'components/Button';
import categoryInterface from 'types/category';

interface HomeState {
  categories: categoryInterface[];
  isModalOpen: boolean;
  isVotedOpen: boolean;
  voteForm: {
    email: {
      value: string;
      valid: boolean;
      focused: boolean;
      messageClassName: string;
    };
  };
  formIsValid: boolean;
  loading: boolean;
}

interface HomeProps extends RouteComponentProps {
  vote: IinitialState;
  fetchCategories: () => Promise<categoryInterface[]>;
  clearVotes: () => void;
}

export class Home extends Component<HomeProps, HomeState> {
  state = {
    categories: [],
    isModalOpen: false,
    isVotedOpen: false,
    voteForm: {
      email: {
        value: '',
        valid: false,
        focused: false,
        messageClassName: 'none',
      },
    },
    formIsValid: false,
    loading: false,
  };

  async componentDidMount(): Promise<void> {
    const { fetchCategories, vote } = this.props;
    let { categories } = vote;
    if (categories && categories.length > 0) this.setState({ categories });
    else {
      categories = await fetchCategories();
      this.setState({ categories });
    }
  }

  toggleModal = (): void => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  toggleVoted = (): void => {
    this.setState({ isVotedOpen: !this.state.isVotedOpen });
  };

  toggleLoading = (): void => {
    this.setState({ loading: !this.state.loading });
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
  handleOnSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    const { voteForm } = this.state;
    const { vote, clearVotes } = this.props;
    const { votes } = vote;

    if (votes && votes.length === 0) {
      window.alert('You have to nominate people to be able to finish the voting process');
      return;
    }

    if (window.confirm('Submitting votes... Click ok to continue')) {
      if (voteForm.email.valid && voteForm.email.value !== '') {
        const email = voteForm.email.value;

        if (email.split('@')[1] !== 'stu.cu.edu.ng')
          window.alert('Please use a covenant university email to vote');
        else {
          this.toggleLoading();
          const voteData = {
            email,
            votes,
          };
          try {
            await axios.post('/vote/v1/', voteData);
            this.toggleLoading();
            this.toggleVoted();
            clearVotes();
          } catch (err) {
            this.toggleLoading();
            const errorData = err.response.data;
            if (errorData && errorData.data && errorData.data.errors) {
              window.alert(errorData.data.errors[0].msg);
            } else {
              window.alert('An error occured!');
            }
            console.log(err.response.data.data.errors);
          }
        }
      } else {
        window.alert('Invalid form submission!');
      }
    }
  };

  render(): JSX.Element {
    const { categories, isModalOpen, isVotedOpen, loading, voteForm, formIsValid } = this.state;
    const { history, vote } = this.props;
    const { votes } = vote;

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
                const alreadyVoted = votes.find(vote => vote.category === category._id);

                return (
                  <div
                    className={`Home -category ${alreadyVoted && '-category--voted'}`}
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
              {votes &&
                votes.map(vote => {
                  const category = categories.find(
                    (cat: categoryInterface) => cat._id === vote.category
                  ) as unknown as categoryInterface;

                  const nominee =
                    category && category?.nominees.find(nominee => nominee._id === vote.nominee);

                  return (
                    <div className="Home -modal-category" key={vote.category}>
                      <div className="Home -modal-category-icon">
                        <CategoryIcon color="#FE77FC" category={category && category.name} />
                      </div>
                      <div className="Home -modal-category-body">
                        <div className="Home -modal-category-title">
                          {category && category.name}
                        </div>
                        <br />
                        <div className="Home -modal-category-nominated">
                          <b>Nominated:</b> {nominee && nominee?.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>

                <Button
                  className="Button-cancel"
                  type="button"
                  onClick={() => this.toggleModal()}
                  style={{ color: '#fff', fontSize: 12 }}>
                  Close
                </Button>
              </div>
            </form>
          </div>
        </Modal>

        <Modal isOpen={isVotedOpen} onClose={() => this.toggleVoted()}>
          <div className="Home -modal">
            <div className="Home -modal-top">
              <h2>Final Vote -- Wings Award 2020</h2>
            </div>

            <div className="Home -modal-badge">
              <BadgeIcon />
            </div>

            <div className="Home -modal-voted">
              Thanks for your votes! Please confirm your votes by clicking on the verification email
              sent to {voteForm.email.value}. Please check spam if you can’t find the email.
            </div>

            <div className="Home -modal-categories-btn" style={{ padding: 0 }}>
              <Button
                className="Button-brand"
                type="button"
                onClick={() => this.toggleVoted()}
                style={{ backgroundColor: '#ff50e828' }}>
                Done
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ vote }: RootState) => {
  return {
    vote,
  };
};

export default connect(mapStateToProps, { fetchCategories, clearVotes })(Home);
