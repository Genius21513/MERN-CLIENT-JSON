const posts = (states = [], action) => {
    switch (action.type) {
        case 'GET':
            return action.payload;
        case 'POST':
            return [...states, action.payload];
        case 'DELETE':
            return states.filter((state) => (state._id !== action.payload));
        case 'UPDATE':
            return states.map(state => (state._id !== action.payload._id)? state : action.payload)
    }
    return states;
}

export default posts;