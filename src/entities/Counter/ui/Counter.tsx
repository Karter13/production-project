import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = memo(() => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <button
                type="button"
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('Увеличить')}
            </button>
            <button
                type="button"
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('Уменьшить')}
            </button>
        </div>
    );
});
