export const initialState = {
    name:"",
    age:"",
    gender:"",
    Interest:"",
    Status:"",
    language:"",
    Looking:"",
    About:"",
    Choice:"",
    uid:10
    


}


export const inputReducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return { 
            ...state,
            name:action.payload,
            // age:action.payload,
            // gender:action.payload
        }
    //   default:
    //     return state;

        case "COMPLETE1":
        return { 
            ...state,
            age:action.payload,
        }
        case "COMPLETE2":
        return { 
            ...state,
            gender:action.payload
        }
        case "COMPLETE3":
        return { 
            ...state,
            Interest:action.payload,
        }
        case "COMPLETE4":
        return { 
            ...state,
            Status:action.payload
        }
        case "COMPLETE5":
        return { 
            ...state,
            language:action.payload,
        }
        case "COMPLETE6":
        return { 
            ...state,
            Looking:action.payload
        }
        case "COMPLETE7":
        return { 
            ...state,
            About:action.payload
        }
        case "COMPLETE9":
        return { 
            ...state,
            Choice:action.payload,

        }
      default:
        return state;
    }
  };