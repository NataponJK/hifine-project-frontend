import { TypeAnimation } from 'react-type-animation';

const AnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        '',
        1000,
        'Welcome',
        1000,
        'Welcome to',
        1000,
        'Welcome to HiFine',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default AnimationComponent