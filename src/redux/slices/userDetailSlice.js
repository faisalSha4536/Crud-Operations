import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 export const createUser = createAsyncThunk('createUser', async (data)=>{
    const response = await fetch('https://65d4e0833f1ab8c634362f35.mockapi.io/crud', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
       return (error.message)
    }
})

 export const updateUser = createAsyncThunk('updateUser', async (data)=>{
    const response = await fetch(`https://65d4e0833f1ab8c634362f35.mockapi.io/crud/${data.id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
       return (error.message)
    }
})

 export const deleteUser = createAsyncThunk('deleteUser', async (id)=>{
    const response = await fetch(`https://65d4e0833f1ab8c634362f35.mockapi.io/crud/${id}`, {      
        method: 'DELETE',
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
       return (error.message)
    }
})

export const showUser = createAsyncThunk('showUser', async ()=>{
    const reponse = await fetch('https://65d4e0833f1ab8c634362f35.mockapi.io/crud')

    try {
        const result = await reponse.json()
        return result
    } catch (error) {
       return (error.message)
    }
})


const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData : [],
        Gender: [],
    },

    reducers: {
      searchUser : (state, action)=>{
        state.searchData = action.payload
      },

      Gender: (state, action)=>{
        state.Gender = action.payload
      }
    },

    extraReducers: (builder) => {
        builder
          .addCase(createUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
            state.error = null; // Clear error on successful request
          })
          .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          .addCase(showUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = null; // Clear error on successful request
          })
          .addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          .addCase(deleteUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const {id} = action.payload;
            if(id){
              state.users = state.users.filter((user)=>user.id !== id)
            }
            state.error = null; // Clear error on successful request
          })
          .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
      }
      
})

export default userDetailSlice.reducer

export const {searchUser, Gender} = userDetailSlice.actions