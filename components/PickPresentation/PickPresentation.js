import { useState } from 'react';

import { Logo } from 'chansencode-lib';

import css from './PickPresentation.module.scss';

export const PickPresentation = ({
  data,
  controller,
  setController,
  colors,
}) => {
  async function onPick(index) {
    setController({ ...controller, presIndex: index });
  }

  return (
    <ul className={css.ul}>
      <Logo height="120px" pc={colors.pc} sc={colors.sc} />

      <div>
        <h4 className="sc">Slideshows</h4>
        {data.map((pres, index) => (
          <Item
            key={`picker${pres._id}`}
            pres={pres}
            onClick={() => onPick(index)}
          />
        ))}
      </div>
    </ul>
  );
};

const Item = ({ pres, onClick }) => {
  const [onHover, setHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className={`${onHover && css.hover_or_focus}`}
      onClick={onClick}
    >
      <span className="sc">{`>`}</span>
      {pres.title}
    </li>
  );
};
