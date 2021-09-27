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

const getCurrentHeader = () => {
  const location = window.location.href;

  if (location.split('/').includes('messages')) {
    return 'messages';
  }

  return location.split('/')[location.split('/').length - 1];
}

export {
  createProfileData,
  getCurrentHeader
}
