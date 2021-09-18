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

export { createProfileData }
