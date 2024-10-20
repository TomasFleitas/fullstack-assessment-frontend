import style from './index.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style['footer']}>
      <p>
        &copy; {currentYear}{' '}
        <a href="https://www.linkedin.com/in/tomasfleitas/" target="_blank">
          Tomás Fleitas.
        </a>{' '}
        All rights reserved.
      </p>
    </footer>
  );
};
