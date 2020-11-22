import ReactDOM from 'react-dom';

export const createConainter = () => {
  const container = document.createElement('div');

  return {
    render: (component) => ReactDOM.render(component, container),
    container,
  };
};
