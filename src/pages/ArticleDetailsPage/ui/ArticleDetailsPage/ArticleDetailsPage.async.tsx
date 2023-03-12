import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК НЕ ДЕЛАТЬ!!!!!!!!!!!ВРЕМЕННО
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 2000);
}));
