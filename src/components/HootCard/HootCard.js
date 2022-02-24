import {HootCardStyle} from './styles'
import IconFavorite from '../../assets/icons/IconFavorite';
import { Link } from 'react-router-dom';
import IconOptions from '../../assets/icons/IconOptions';
import IconComment from '../../assets/icons/IconComment';
import IconResend from '../../assets/icons/IconResend';
import IconLike from '../../assets/icons/IconLike';
import IconLikeSelected from '../../assets/icons/IconLikeSelected';
import IconShare from '../../assets/icons/IconShare';
import { useState } from 'react';

export default function HootCard(props) {
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const [likesCount, setLikesCount] = useState(props.likesCount);
  const [isCommented, setIsCommented] = useState(props.isCommented);
  const [commentsCount, setCommentsCount] = useState(props.commentsCount);

  function handleLikeClick() {
    if (!isLiked) {
      setLikesCount(prev => prev + 1)
    }
    if (isLiked) {
      setLikesCount(prev => prev - 1)
    }
    setIsLiked(prev => !prev)
    props.handleLikeClick()
  }

  return (
    <div className="hoot__component" onClick={() => {
      // console.log(props.hootId)
      // console.log(props.userId)
      }}>
        <HootCardStyle >
            <div className="hoot__container" >
                <div className="container__header" >
                </div>
                <div className="container__body">
                    <div className="user--avatar__container">
                        <div className="user--avatar__wrapper">
                            <img className="user--avatar" src={props.img_url} alt="robot avatar" />
                        </div>
                    </div>
                    <div className="hoot-content">
                      <div className="content--header">
                        <div className="info--header">
                          <div className="user-info--header">
                            <Link to={`/${props?.username}`} className="user--link">
                              <div className="name-user--wrapper">
                                <span className="name-user--value">{props?.username}</span>
                              </div>
                              <div className="username--wrapper">
                              <span className="username--value">@{props?.username}</span>
                              </div>
                            </Link>
                          </div>
                          <div className="info-separator">
                            <span className="separator-character">·</span>
                          </div>
                          <div className="hoot-date"> {/*  change div to link later */}
                            <time className="date-value">{/*  the main use of this tag is for helping search engines */}
                              {props.time}
                            </time>
                          </div>
                        </div>
                        <div className="options-header">
                          <div className="options-background"></div> 
                            <div className="icon--option__container">
                                <IconOptions />
                            </div>
                        </div>
                      </div>
                      <div className="text__container">
                          <div className="text--content">
                            {props.box_content}
                          </div>
                          <div className="footer__container">
                              <div className="icon_container">
                                <div className="icon--wrapper icon-comment">
                                  <div className="icon--background"></div>
                                  <IconComment /> 
                                  <div className="tooltip" role="tooltip">
                                    <span >Reply</span>
                                  </div>
                                </div>
                                <div className="count--wrapper">
                                  <span className="icon--count count-comment">
                                    { commentsCount <= 0 ? null : commentsCount }
                                  </span>
                                </div>
                              </div>
                              <div className="icon_container">
                                <div className="icon--wrapper icon-resend">
                                  <div className="icon--background"></div>
                                  <IconResend /> 
                                  <div className="tooltip" role="tooltip">
                                    <span >Resend</span>
                                  </div>
                                </div>
                                <div className="count--wrapper">
                                  <span className="icon--count count-resend">2</span>
                                </div>
                              </div>
                              <div className="icon_container" onClick={handleLikeClick}>
                                <div className="icon--wrapper icon-favorite">
                                  <div className="icon--background"></div>
                                  { isLiked ? <IconLikeSelected /> : <IconLike /> }
                                  <div className="tooltip" role="tooltip">
                                    <span >Like</span>
                                  </div>
                                </div>
                                <div className="count--wrapper">
                                  <span className="icon--count count-favorite" style={isLiked ? {color: "var(--red-twitter)"} : {}}>
                                    { likesCount <= 0 ? null : likesCount }
                                  </span>
                                </div>
                              </div>
                              <div className="icon_container">
                                <div className="icon--wrapper icon-share">
                                  <div className="icon--background"></div>
                                  <IconShare /> 
                                  <div className="tooltip" role="tooltip">
                                    <span >Share</span>
                                  </div>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    
                </div>
            </div>
        </HootCardStyle>
    </div>
  )
}