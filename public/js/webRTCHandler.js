import * as wss from './wss.js'

export const sendPreOffer = (callType, calleePersonalCode) => {
    // console.log(callType)
    // console.log(callePersonalCode)
    const data = {
        callType,
        calleePersonalCode
    }

    wss.sendPreOffer(data)
}

export const handlePreOffer = (data) => {
    console.log("pre offer came webRTC handler")
    console.log(data)
}