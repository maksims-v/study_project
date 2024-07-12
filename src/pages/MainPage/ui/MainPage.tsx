import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <div>{t('Главная страница')}</div>
      <div>{t('Вторая')}</div>
    </div>
  );
};

export default MainPage;
