type sessionContextType = {
    user: boolean,
    signin: () => void,
    signout: () => void,
}

const sessionContextDefaultValues: sessionContextType = {
    user: false,
    signin: () => {},
    signout: () => {},
}