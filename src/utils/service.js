class InputHandlers {
  static onEnter (submit, inputElement) {
    return (e) => {
      if (e.key === 'Enter') {
        submit(inputElement.current.value);
        inputElement.current.blur();
      }
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

const randomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const fetchImageUrl = async (newImage) => {
  const image = await fetch(newImage);
  return image.url;
}

export {
  InputHandlers,
  getCurrentHeader,
  randomInteger,
  fetchImageUrl
}
