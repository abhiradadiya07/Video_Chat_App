/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo } from 'react'
import { io } from "socket.io-client"

const SocketContext = createContext(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}
const SocketProvider = ({ children }) => {

    const socket = useMemo(() => io('localhost:8000'), [])
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider