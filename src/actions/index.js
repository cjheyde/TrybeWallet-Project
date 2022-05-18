// Coloque aqui suas actions
export const CREATE_USER = 'CREATE_USER';
export const CREATE_WALLET = 'CREATE_WALLET';

export const createUser = (user) => ({ type: CREATE_USER, payload: user });

export const createWallet = (wallet) => ({ type: CREATE_WALLET, payload: wallet });
// newAction é o nome que será chamado dentro do dispatch(newAction(state_model)) no componente que precisa setar o novo estado na store, via mapDispatchToProps
