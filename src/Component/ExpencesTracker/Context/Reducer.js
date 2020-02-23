export const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            console.log('delete------', action.payload)
            return {
                ...state,
                transactions: state.transactions.filter(t => t._id !== action.payload.id)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [...state.transactions, { text: action.payload.text, amount: action.payload.amount }]
            }
        case 'ALL':
            return {
                ...state,
                transactions: action.payload
            }
        default:
            return state
    }
}