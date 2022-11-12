import { getTransactionsFailed, getTransactionsStart, getTransactionsSuccess, transactionId, addTransaction, updateTransaction  } from './transactionSlice';
import { instance } from '../../instance';
import { getUsers } from '../users/usersGetSlice';


export const getTransactions = () => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
        try {
            const res = await instance.get('/transaction');
            dispatch(getTransactionsSuccess(res.data));
        } catch (err) {
            dispatch(getTransactionsFailed(err))
        };

    };
};


export const getTransactionsById = (id) => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
    try {
        const res = await instance.get(`/transaction/${id}`);
        dispatch(transactionId(res.data));
    } catch (err) {
        dispatch(getTransactionsFailed(err))
    };
    };
};

export const createTransactions = (value) => {
    return async() => {
        // dispatch(getTransactionsStart());
        try {
            const rta = await instance.post('/transaction', value);
            // dispatch(getUsers());
            return rta
        } catch (err) {
            if (err.name === 'AxiosError') {
              return err.response
            }
        };
    };
};

export const getUpdateTransactions = (id) => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
        try {
            const res = await instance.put(`/transaction/${id}`)
            dispatch(addTransaction(res.data));
            dispatch(getTransactions());
        } catch (err) {
            dispatch(getTransactionsFailed(err));
        };
    };
};
