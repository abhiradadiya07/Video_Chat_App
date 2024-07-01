import { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";

const Lobby = () => {

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");

    const socket = useSocket();
    const navigate = useNavigate();

    const handleSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            console.log(email, room);
            socket.emit("room:join", { email, room });
        },
        [email, room, socket]
    );


    const handleJoinRoom = useCallback(
        (data) => {
            const { room } = data;
            navigate(`/room/${room}`);
        },
        [navigate]
    );

    useEffect(() => {
        socket.on("room:join", handleJoinRoom);
        return () => {
            socket.off("room:join", handleJoinRoom);
        }
    }, [socket, handleJoinRoom])
    return (
        <div className="text-3xl text-center mt-4">
            <h1>Lobby</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="email">Email ID : </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    className="border-black rounded border-2"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="room">Room Number : </label>
                <input
                    type="text"
                    id="room"
                    className="border-black rounded border-2"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <br />
                <button className="border-2 border-black rounded-xl p-2 mt-4">Join</button>
            </form>
        </div>
    )
}

export default Lobby