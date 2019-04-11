import React, { Fragment, useEffect, useState } from 'react';

const RandomColour = props => {
  const colours = [
    'cadetblue'
    // 'antiquewhite',
    // 'aquamarine',
    // 'chocolate',
    // 'darkseagreen'
  ];

  const [randomColour, setStateRandomColour] = useState(
    colours[Math.trunc(Math.random() * colours.length)]
  );

  useEffect(() => {
    const colour = Math.trunc(Math.random() * colours.length);
    setStateRandomColour(colours[colour]);
  }, []);

  return (
    // <Fragment
    //   style={{ backgroundColor: randomColour, height: '100px', width: '100px' }}
    // />
    <Fragment>
      {React.cloneElement(props.children, { ...props, randomColour })}
    </Fragment>
  );
};

export default RandomColour;
