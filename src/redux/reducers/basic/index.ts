import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../../stores';


export const fetchTodos = createAsyncThunk<
    void, { timeout: number }, { state: RootState, dispatch: AppDispatch }
>('todos/fetchTodos', async ({ timeout }, { getState, dispatch }) => {

    const response = await new Promise<void>((res) => {
        setTimeout(() => {
            res()
        }, timeout);
    })
    //dispatch(incrementByAmount(timeout));


})

export interface IWallet {
    address: string;
    mnemonic: string;
    privateKey: string;
}

export interface IWalletState {
    value: number,
    wallets: IWallet | undefined
}

const inital: IWalletState = {
    value: 0,
    wallets: undefined
}


export const walletSlices = createSlice({
    name: 'walelt',
    initialState: inital,
    reducers: {
        create: (state, action: PayloadAction<IWallet>) => {
            state.wallets = action.payload
        }
    },
    extraReducers: builder => {
        // builder.addCase(fetchTodos.pending, (state, action) => {
        //     state.loading = true;
        // }).addCase(fetchTodos.fulfilled, (state, action) => {
        //     state.loading = false
        // })
    }
});


export const {
    create
} = walletSlices.actions;

export const selectCount = (state: RootState) => state.wallet.value
export const currentWallet = (state: RootState) => state.wallet.wallets

export default walletSlices.reducer;