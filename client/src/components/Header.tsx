import * as React from 'react';
import './Header.css';

interface IState {
  isSettingsOpen: boolean,
}

interface IProps {
  temperature: string,
  changeTemperature: () => void,
  speed: string,
  changeSpeed: () => void,
}
class Header extends React.Component<IProps, IState> {
  state = {
    isSettingsOpen: false,
  }

  toggleSettings = () => {
    this.setState({ isSettingsOpen: !this.state.isSettingsOpen });
  }

  render() {
    const { isSettingsOpen } = this.state;
    
    return (
      <header className="header">
        <span className="mdi mdi-emoticon-happy-outline" />
        <h4>Weather</h4>
        <span className="mdi mdi-settings" onClick={this.toggleSettings} />

        {isSettingsOpen && (
          <div className="header-settings">
            <span>Settings Menu</span>
            <p onClick={this.props.changeTemperature}>Temperature</p>
            <span>{this.props.temperature}</span>
            <p onClick={this.props.changeSpeed}>Speed</p>
            <span>{this.props.speed}</span>
          </div>
        )}
      </header>
    )
  }
}

export default Header;