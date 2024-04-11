import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io();

function ViewerInfo() {
    const [viewerCount, setViewerCount] = useState(0);
    const [viewers, setViewers] = useState([]);

    useEffect(() => {
        socket.on("update", ({ count, viewers }) => {
            setViewerCount(count);
            setViewers(viewers);
        });

        return () => {
            socket.off("update");
        };
    }, []);

    return (
        <div>
            <h2>ยอดรวมผู้ชม: {viewerCount}</h2>
            <p>รายการ IP ผู้ชม:</p>
            <ul>
                {viewers.map((viewer, index) => (
                    <p key={index}>{viewer.ip}</p>
                ))}
            </ul>
        </div>
    );
}

export default ViewerInfo;
