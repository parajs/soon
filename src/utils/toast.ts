import Toast from 'react-native-root-toast';


let toast: unknown = null

export  const toastShow = (msg: string)=>{
    toast && Toast.hide(toast)
    toast =  Toast.show(msg, {
    duration: Toast.durations.LONG,
  });
}

