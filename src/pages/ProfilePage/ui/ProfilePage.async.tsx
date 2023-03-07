import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК НЕ ДЕЛАТЬ!!!!!!!!!!!ВРЕМЕННО
    setTimeout(() => resolve(import('./ProfilePage')), 2000);
}));
