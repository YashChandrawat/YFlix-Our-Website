
let initialState = {openModal:false,videoKey:""}

// this state contains the config url which will help to get the backgrouund images as well as the poster and proifile

const reducer = (state = initialState,action) =>{
   if(action.type === "setVideoConfig"){
       return action.payload
   }

   else{
       return state
   }
}

export default reducer