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

export interface IProvider {
    chainId: number;
    url: string;
    expolorer: string;
    selected: boolean;

}
export interface IWallet {
    address: string;
    mnemonic: string;
    privateKey: string;
}

export interface IWalletState {
    value: number,
    wallets: IWallet | undefined
    providers: IProvider[]
}

const inital: IWalletState = {
    value: 0,
    wallets: undefined,
    providers: [
        { url: "https://rpc.fuse.io", chainId: 122, expolorer: "https://explorer.fuse.io/", selected: false },
        { url: "http://127.0.0.1:8545", chainId: 122, expolorer: "https://explorer.fuse.io/", selected: true }
    ]
}


export const walletSlices = createSlice({
    name: 'walelt',
    initialState: inital,
    reducers: {
        create: (state, action: PayloadAction<IWallet>) => {
            state.wallets = action.payload
        },
        selectProvider: (state, action: PayloadAction<IProvider>) => {
            let provider = state.providers.find(f => f.chainId == action.payload.chainId);

            if (!provider) {
                provider!.selected = true;
                state.providers = [...state.providers.filter(f => !f.selected), provider!]
            }

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
export const providers = (state: RootState) => state.wallet.providers

export default walletSlices.reducer;