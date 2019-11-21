import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const renderApplication = async () => {
  const Application = require('./components/Application').default;
  render(
    <AppContainer>
      <Application />
    </AppContainer>,
    document.getElementById('application'),
  );
};

renderApplication();

if (module.hot) {
  module.hot.accept(renderApplication);
}
