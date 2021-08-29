import React from 'react'
import ChatRow from '../chat-row/ChatRow'
import './ChatsList.css'

function ChatsList() {
    return(
        <div className="chats">
            <ChatRow
            name="Mark"
            message="Hello"
            timestamp="40 sec ago"
            // profilePic="https://imagenes.heraldo.es/files/image_990_v1/files/fp/uploads/imagenes/2019/05/17/grumpy-cat.r_d.461-430-12593.jpeg"
            />
            <ChatRow
            name="Mark"
            message="Hello"
            timestamp="40 sec ago"
            profilePic="https://imagenes.heraldo.es/files/image_990_v1/files/fp/uploads/imagenes/2019/05/17/grumpy-cat.r_d.461-430-12593.jpeg"/>
            <ChatRow
            name="Mark"
            message="Hello"
            timestamp="40 sec ago"
            profilePic="https://imagenes.heraldo.es/files/image_990_v1/files/fp/uploads/imagenes/2019/05/17/grumpy-cat.r_d.461-430-12593.jpeg"/>
        </div>
    )
}

export default ChatsList;