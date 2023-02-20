import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Component for testing ErrorBoundary
export const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const isError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={isError}
        >
            {t('throw error')}
        </Button>
    );
};
