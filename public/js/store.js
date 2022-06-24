let state = {
    socketId : null,
    localStream: null,
    remoteStream: null,
    screenSharingActive: false, //Compartir pantalla activo
    screenSharingStream: null, //transmisión de pantalla compartida
    allowConnectionsFromStrangers: false, //Permitir conexiones de extraños
}

export const setSocketId = (socketId) => {
    state = {
        ...state,
        socketId: socketId
    }
    //console.log(state)
}

export const setLocalStream = (stream) => {
    state = {
        ...state,
        localStream: stream
    }
}

export const setAllowConnectionsFromStrangers = (allowConnection) => {
    state = {
        ...state,
        allowConnectionsFromStrangers: allowConnection
    }
}

export const setScreenSharingActive = (screenSharingActive) => {
    state = {
        ...state,
        screenSharingActive : screenSharingActive
    }
}

export const setScreenSharingStream = (stream) => {
    state = {
        ...state,
        screenSharingStream: stream
    }
}

export const setRemoteStream = (stream) => {
    state = {
        ...state,
        remoteStream: stream
    }
}

export const getState = () => {
   return state;
}