export const createOrderAction = (Order) => {
    
     console.log('!!!order from createorderAction',Order)
    
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        
            firestore.collection('orders').add({
                ...Order,
                authorFirstName: profile.firstName || '',
                authorLastName: profile.lastName|| '',
                authorId: authorId || '',
                createdAt: new Date()
            }).then(() => {
            dispatch({type: 'CREATE_ORDER', Order});
        }).catch((err) => {
            dispatch({type: 'CREATE_ORDER_ERROR', err})
        });
    }
};

