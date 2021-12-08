import css from './Section.module.scss';

export const Section = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};
