import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginUserName,
} from './getLoginUserName';

describe('getLoginUserName.test', () => {
    test('should return UserName', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toBe('admin');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toBe('');
    });
});
