import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК НЕ ДЕЛАТЬ!!!!!!!!!!!ВРЕМЕННО
    setTimeout(() => resolve(import('./AboutPage')), 2000);
}));
