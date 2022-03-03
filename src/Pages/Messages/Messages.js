import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserCardMessage from '../../components/UserCardMessage/UserCardMessage'
import ChatMessage from '../../components/ChatMessage/ChatMessage'
import { useUserState } from '../../context/UserContext';
import { api } from '../../services/api';
import {MessagesStyle} from './styles'

export default function Favorites(props) {
  const [userMessages, setUserMessages] = useState([])
  const [selectedUser, setSelectedUser] = useState({
    _id: null,
    username: null,
    img_url: null,
  })
  const [selectedChat, setSelectedChat] = useState([])
  const [selectedMessageId, setSelectedMessageId] = useState('')

  const { user } = useUserState()
  let params = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    // setIsLoading(true)
    
    api.post(`/messages`, { userId: user._id})
      .then(res => {
        setUserMessages(res.data.messages)
        // setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        // setIsLoading(false)
      })
    
  }, [])

  useEffect(() => {
    if (params.id) {
      api.get(`messages/${params.id}`)
        .then(res => {
          if (res.data.otherUser) {
            setSelectedUser({
              _id: res.data.otherUser._id,
              username: res.data.otherUser.username,
              img_url: res.data.otherUser.img_url,
            })
          }
          if (res.data.messages) {
            const [ message ] = res.data.messages
            const otherUser = message.party.find(elem => elem._id !== user._id)

            setSelectedChat(message.content)
            setSelectedUser({
              _id: otherUser._id,
              username: otherUser.username,
              img_url: otherUser.img_url,
            })
          }
        })

      const chatHeight =  document.querySelector('.chat-body__container')
      chatHeight?.scrollTo(0, chatHeight?.scrollHeight)
    }

    // const messageSelected = userMessages.find(msg => msg.party)
  }, [])

  function handleMessageClick(party, content) {
    const [user1, user2] = party
    
    const url = `/messages/${user1._id}-${user2._id}`
    const messageWithUser = party.find(elem => elem._id !== user._id)
    // console.log('msgs: ', userMessages)
    setSelectedUser({
      _id: messageWithUser._id,
      username: messageWithUser.username,
      img_url: messageWithUser.img_url,
    })

    setSelectedChat(content)

    setSelectedMessageId(`${user1._id}-${user2._id}`) //highlight message clicked

    navigate(url)
  }
  return (
    <div className="messages-page">
      <MessagesStyle>
      <div className="main__container--header">
        <div className="main__header">
          <h1>Messages</h1>
        </div>
        <div className="messages__container">
          {userMessages?.map(item => {
            return (
              <UserCardMessage
                key={item?._id}
                username={item?.party.find(elem => elem._id !== user._id).username}
                img_url={item?.party.find(elem => elem._id !== user._id).img_url}
                time={item?.last_update_formatted}
                lastMessage={item?.content[item?.content.length - 1].message}
                handleClick={() => handleMessageClick(item?.party, item?.content)}
                isSelected={selectedMessageId === params.id ? true : false}
              />
            )
          })}
        </div>
      </div>
      <div className="chat__container">
        {params.id ?
        <div className="chat-full--wrapper">
          <div className="chat__header">
            <div className="user-avatar--wrapper">
              <img src={selectedUser.img_url} alt="user avatar" />
            </div>
            <div className="user-info--wrapper">
              <div className="nickname__container">
                <span>{selectedUser.username}</span>
              </div>
              <div className="username__container">
                <span>@{selectedUser.username}</span>
              </div>
            </div>
          </div>
          <div className="chat-body__container">
            {selectedChat?.map((item, n) => {
              return (
                <ChatMessage
                  key={n}
                  img_url={item?.userId === user._id ? user.img_url : selectedUser.img_url}
                  message={item?.message}
                  date={item?.createdAt}
                  otherUser={item?.userId === user._id ? false : true}
                />
              )
            })}
          </div>
          <div className="compose__container">
            <span>Type here</span>
          </div>
        </div>
        :
        <div className="chat-empty--wrapper">
          <span className="title-empty">You don't have a message selected</span>
          <span className="text-empty">Choose one from your existing messages, or start a new one.</span>
        </div>
        }
      </div>
      </MessagesStyle>
    </div>
  );
}