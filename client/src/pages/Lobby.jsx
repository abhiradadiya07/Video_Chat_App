// import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { useState } from "react";

const Lobby = () => {

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");

    //   const socket = useSocket();
    //   const navigate = useNavigate();

    //   const handleSubmitForm = useCallback(
    //     (e) => {
    //       e.preventDefault();
    //       socket.emit("room:join", { email, room });
    //     },
    //     [email, room, socket]
    //   );
    return (
        <div>
            <h1>Lobby</h1>
            <form >
                <label htmlFor="email">Email ID</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="room">Room Number</label>
                <input
                    type="text"
                    id="room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <br />
                <button>Join</button>
            </form>
        </div>
    )
}

export default Lobby