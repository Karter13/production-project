import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК НЕ ДЕЛАТЬ!!!!!!!!!!!ВРЕМЕННО
    setTimeout(() => resolve(import('./ArticlesPage')), 2000);
}));
