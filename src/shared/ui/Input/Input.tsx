import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Input.module.scss';

interface InputProps {
    className?: string
}

export const Input: FC<InputProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <div />
        </div>
    );
};
