import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type="text" className={cls.input} />
            <input type="text" className={cls.input} />
            <Button
                type="submit"
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
