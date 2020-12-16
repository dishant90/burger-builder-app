import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            userId: null,
            token: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })

    it('should store the token upon login', () => {
        expect(reducer({
            userId: null,
            token: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            localId: 'some user-id',
            idToken: 'some token'
        })).toEqual({
            userId: 'some user-id',
            token: 'some token',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
})