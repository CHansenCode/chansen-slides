import css from './MainContain.module.scss';

export const MainContain = ({ children }) => {
  return <div className={css.main_contain}>{children}</div>;
};
