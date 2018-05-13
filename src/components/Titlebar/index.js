import fp from 'lodash/fp';
import React, { SyntheticEvent } from 'react';
import Button from '../Form/CustomButton';

const mapButtonsToButtonComponent = fp.map(button => <Button key={button.id} {...button} />);

type ButtonType = {
  id: number,
  name: string,
  onClick: (SyntheticEvent<HTMLButtonElement>) => void,
};

type Props = {
  title: string,
  buttons: Array<ButtonType>,
};

const TitleBar = (props: Props) => {
  const { title, buttons } = props;

  return (
    <div className="pad-box bg-white height-75px display-flex align-items-center box-shadow-one">
      <div className="font-size-large">{title}</div>
      <div>{mapButtonsToButtonComponent(buttons)}</div>
    </div>
  );
};

export default TitleBar;

