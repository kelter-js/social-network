import React, { PureComponent } from 'react'
import { Profile } from './profile/profile.js'
import { FeedList } from './feed/feed-list.js'

class MainPageContent extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      'message': this.props.message,
    };

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(e) {
    this.setState({
      'message': e.target.value,
    });
  }

  onFocus() {
    if (this.state.message !== this.props.message) {
      return;
    }

    this.setState({
      'message': '',
    });
  }

  onBlur() {
    if (!this.state.message) {
      this.setState({
        'message': this.props.message,
      });
      return;
    }

    if (this.state.message !== this.props.message) {
      return;
    }

    this.setState({
      'message': this.props.message,
    });
  }

  render() {
    return (
      <div>
        <Profile data={this.props.user} />
        <form className='page-main__news'>
          <label className='news__label'>
            Share news with your friends!
            <textarea className='news__message' value={this.state.message} id='newsMessage' onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} />
          </label>
          <input className='news__submit' type="submit" value="Отправить" />
        </form>
        <div className='page-feed'>
          <FeedList feed={this.props.feed} />
        </div>
      </div>
    );
  }
}

export { MainPageContent }
