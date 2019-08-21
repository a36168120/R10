import React, {Component} from 'react';
import {createFave, deleteFave, queryFaves} from '../../config/model';
const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  addFaveSession = async sessionId => {
    try {
      const addFaves = await createFave(sessionId);
      this.setState({faveIds: [...this.state.faveIds, newFave]});
    } catch (e) {
      throw e;
    }
  };

  removeFaveSession = async sessionId => {
    try {
      const removeFave = await deleteFave(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      throw e;
    }
  };

  getFavedSessionIds = async () => {
    const savedFaves = await queryFaves();
    const faveIds = savedFaves.map(fave => fave[0]);
    this.setState({faveIds});
  };

  componentDidMount() {
    this.getFavedSessionIds();
  }

  render() {
    return (
      <FavesContext.Provider
        addFaveSession={this.addFaveSession}
        removeFaveSession={this.removeFaveSession}
        value={{...this.state}}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export {FavesProvider};
export default FavesContext;
