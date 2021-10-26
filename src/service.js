const createProfileData = (data) => {
  const defaultProfile = {
    'Date of Birth': '',
    'City': '',
    'Education': '',
    'Web Site': '',
  }

  let counter = 0;

  for (let item in defaultProfile) {
    defaultProfile[item] = data[counter++];
  }

  return defaultProfile;
}

class InputHandlers {
  static onChange (updater) {
    return (e) => updater(e.target.value);
  }

  static onFocus (updater, currentValue) {
    return () => {
      if (currentValue) {
        return;
      }

      updater('');
    }
  }

  static onSubmit (submit) {
    return (e) => {
      e.preventDefault();
      submit();
    }
  }

  static onEnter (submit, inputElement) {
    return (e) => {
      if (e.key === 'Enter') {
        submit();
        inputElement.current.blur();
      }
    }
  }

  static onBlur (updater, defaultValue, currentValue) {
    return () => {
      if (!currentValue) {
        updater(undefined);
        return;
      }

      if (currentValue !== defaultValue) {
        return;
      }

      updater(defaultValue);
    }
  }
}

const getCurrentHeader = (headers) => {
  const location = window.location.href;

  if (location.split('/').includes('messages')) {
    return headers.messages;
  }

  return headers[location.split('/')[location.split('/').length - 1]];
}

export {
  createProfileData,
  InputHandlers,
  getCurrentHeader
}
