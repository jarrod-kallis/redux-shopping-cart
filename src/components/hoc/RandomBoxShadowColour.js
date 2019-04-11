import React from 'react';

const RandomBoxShadowColour = WrappedComponent => {
  const getColour = () => {
    const red = Math.trunc(Math.random() * 255);
    const green = Math.trunc(Math.random() * 255);
    const blue = Math.trunc(Math.random() * 255);
    const opacity = Math.random();

    return `rgba(${red},${green},${blue},${opacity}`;
  };

  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} rgbaColour={getColour()} />;
    }
  };
};

export default RandomBoxShadowColour;
