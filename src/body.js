import React, { PureComponent } from 'react'
import { Profile } from './profile.js'
import { Navigation } from './navigation-list.js'
import { Feed } from './feed.js'

class Body extends PureComponent {
  #defaultMessage;

  constructor (props) {
    super(props);
    this.#defaultMessage = '...start your message here.';

    this.state = {
      'message': this.#defaultMessage,
    };

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange (e) {
    this.setState({
      'message': e.target.value,
    });
  }

  onFocus () {
    if (this.state.message !== this.#defaultMessage) {
      return;
    }

    this.setState({
      'message': '',
    });
  }

  onBlur () {
    if (this.state.message) {
      return;
    }

    this.setState({
      'message': this.#defaultMessage,
    });
  }

  render () {
    return (
      <>
        <main className = 'page-main container'>
          <h1 className = 'visually-hidden'>Социальная сеть ВРеакте</h1>
          <nav className = 'page-main__navigation'>
            <Navigation navigation = {this.props.navigation}/>
            <a className = 'navigation__link' href = '#'>Settings</a>
          </nav>
          <section className = 'page-main__profile-wrapper'>
            <h2 className = 'visually-hidden'>Профиль пользователя</h2>
            <Profile data = {this.props.user}/>
            <form className = 'page-main__news'>
              <label className = 'news__label'>
                Share news with your friends!
                <textarea className = 'news__message' value = {this.state.message} id = 'newsMessage' onChange = {this.onChange} onBlur = {this.onBlur} onFocus = {this.onFocus}/>
              </label>
              <input className = 'news__submit' type="submit" value="Отправить" />
            </form>
            <div className = 'page-feed'>
              <Feed feed = {this.props.feed}/>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export { Body }
