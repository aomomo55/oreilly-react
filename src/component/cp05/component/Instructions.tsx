import React from 'react';

type Props = {
  title: string;
  steps: string[];
};

const Instructions: React.VFC<Props> = ({ title, steps }: Props) => (
  <section className="instructions">
    <h2>{title}</h2>
    {steps.map((step, idx) => (
      <p key={`${title.toLowerCase().replace(/ /g, '-')}-instructions-${idx}`}>
        {step}
      </p>
    ))}
  </section>
);

export default Instructions;
