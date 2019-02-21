import * as React from 'react';
import './Header.css';

class Header extends React.Component {
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
            Settings Menu
          </div>
        )}
      </header>
    )
  }
}

export default Header;