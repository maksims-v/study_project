import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <button onClick={toggle}>
      <div>{t('перевод')}</div>
    </button>
  );
}

const App = () => {
  const { theme } = useTheme();

  return (
    //этот suspense нужен для i18n. Для того чтобы ассинхронно подключать chunki c языками
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page ">
          <Sidebar />
          <MyComponent />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
