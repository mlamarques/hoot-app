import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserCardMessage from '../../components/UserCardMessage/UserCardMessage'
import { useUserState } from '../../context/UserContext';
import { api } from '../../services/api';
import {MessagesStyle} from './styles'

export default function Favorites(props) {
  const [userMessages, setUserMessages] = useState([])

  const { user } = useUserState()
  let params = useParams();

  useEffect(() => {
    // setIsLoading(true)
    
    api.get(`/messages/`)
      .then(res => {
        setUserMessages(res.data.messages)
        // setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        // setIsLoading(false)
      })
  }, [])

  return (
    <div className="messages-page">
      <MessagesStyle>
      <div className="main__container">
        <div className="main__header">
          <h1>Messages</h1>
        </div>
        <div className="messages__container">
          <UserCardMessage
            username={'jonasdasdasdasdasdasdasdadsd'}
            img_url={user.img_url}
            time={'2/24/22'}
          />
        </div>
      </div>
      <div className="chat__container">
        {params.id ?
        <div className="chat-full--wrapper">
          <div className="chat__header">
            <div className="user-avatar--wrapper">
              <img src={user.img_url} alt="user avatar" />
            </div>
            <div className="user-info--wrapper">
              <div className="nickname__container">
                <span>jonasdasdasdasdasdasdasdadsdasdasdaasdasdasdsdasdasasdd</span>
              </div>
              <div className="username__container">
                <span>@{params.id}</span>
              </div>
            </div>
          </div>
          <div className="chat-body__container">
            <div className="tes">inicio</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">asssssss</div>
            <div className="tes">fim</div>
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