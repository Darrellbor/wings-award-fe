import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'shared/axios';

import WingsAwardLogo from 'assets/images/wings-logo.svg';
import Success from 'components/Icons/Confirmation/Success';
import Failed from 'components/Icons/Confirmation/Failed';

interface ConfirmationProps extends RouteComponentProps {
  match: {
    isExact: boolean;
    path: string;
    url: string;
    params: {
      email: string;
      signature: string;
      voteId: string;
    };
  };
}

export class Confirmation extends Component<ConfirmationProps> {
  state = {
    confirmed: undefined,
  };

  async componentDidMount(): Promise<void> {
    const { email, signature, voteId } = this.props.match.params;

    try {
      const vote = await axios.get(`/vote/v1/vote/${email}/${signature}`);

      if (vote) {
        const updatedVote = await axios.put(`/vote/v1/vote/${voteId}`, { confirmed: true });
        if (updatedVote) this.setState({ confirmed: true });
      }
    } catch (err) {
      //console.log(err.response.data);
      this.setState({ confirmed: false });
    }
  }

  render(): JSX.Element {
    const { confirmed } = this.state;

    return (
      <div className="Confirmation -body">
        <div className="Confirmation -body-inner">
          <div className="Confirmation -logo">
            <img src={WingsAwardLogo} alt="Wings Award" />
          </div>

          <br />
          <br />

          <div className="Confirmation -details">
            {confirmed && (
              <>
                <Success />
                <p>Your Votes Have Been Successfully Confirmed!</p>
              </>
            )}

            {confirmed === false && (
              <>
                <Failed />
                <p>Your Votes Could not be confirmed!</p>
              </>
            )}

            {confirmed === undefined && (
              <>
                <p>Loading...</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
