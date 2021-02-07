type LoadingState = {
    state: 'loading';
};

type SuccessState = {
    state: 'success';
    response: {
        body: string;
    };
};

type FailState = {
    state: 'fail';
    reason: string;
};


type ResourceState = LoadingState | SuccessState | FailState;

function printLogState(status: ResourceState) {
    switch(status.state) {
        case 'loading' : 
            console.log(`😶 ${status.state}`)
            break;
        case 'success' : 
            console.log(`😃 ${status.response.body}`)
            break;
        case 'fail' : 
            console.log(`😫 ${status.reason}`)
            break;
        default:
            throw new Error(`unknown: ${name}`)
    }
};

printLogState({state: 'loading' });
printLogState({state: 'success', response: { body : 'loaded!' }});
printLogState({state: 'fail', reason: 'no network'});

