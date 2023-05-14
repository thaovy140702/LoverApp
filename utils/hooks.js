import { useEffect } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useSelector } from "react-redux"

// export const token = useSelector(state=>state.user)

export const useMessageAndErrorUser = (navigation, dispatch, navigateTo = "login") => {
    const {loading, message, error, isAuthenticated, accessToken} = useSelector((state) => state.user);
    useEffect(() => {
        if(error){
          Toast.show({
            type: 'error',
            text1: error,
          });
          dispatch({
            type: "clearError"
          });
        }
    
        if(message){
          navigation.navigate(navigateTo)
          Toast.show({
            type: 'success',
            text1: message
          });
          dispatch({
            type: "clearMessage"
          })
        }
      }, [error, message, dispatch]);

      return loading
}


export const useMessage = (navigation, dispatch, navigateTo = "login") => {
  const {loading, message} = useSelector((state) => state.other);
  useEffect(() => {
      
      if(message){
        navigation.navigate(navigateTo)
        Toast.show({
          type: 'success',
          text1: message
        });
        dispatch({
          type: "clearMessage"
        })
      }
    }, [message, dispatch]);

    return loading
}