import { expect } from '../test_helper';

import { gameReducer } from 'reducers'


describe('gameReducer', () => {
	describe('SET_STATUS', () => {
		
		it('ignores invalid statuses', () => {
			const initialState = {
				status: 'VIEWING'
			}
			
			const finalState = {
				status: 'VIEWING'
			}
			
			const action = {
				type:
			}
			
			expect(gameReducer(initialState)).to.eql(finalState)
		})
		
	})
	
})