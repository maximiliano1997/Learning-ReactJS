import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles.css'
import CoreImage from './assets/images/drawers.jpg'
import AvatarMichelle from './assets/images/avatar-michelle.jpg'
import IconShare from './assets/images/icon-share.svg'
import IconTwitter from './assets/images/icon-twitter.svg'
import IconFacebook from './assets/images/icon-facebook.svg'
import IconPinterest from './assets/images/icon-pinterest.svg'


function ArticlePreviewComponent() {
    const [shareEstate, setShareEstate] = useState({
        shareBtn: false,
        shareBtn2: false,
        shareBtn3: false
    })

    function handleShareButton(id) {
        switch (id) {
            case 1:
                setShareEstate((prevEstate) => ({ ...prevEstate, shareBtn: !prevEstate.shareBtn }))
                break;
            case 2:
                setShareEstate((prevEstate) => ({ ...prevEstate, shareBtn2: !prevEstate.shareBtn2 }))
                break;
            case 3:
                setShareEstate((prevEstate) => ({ ...prevEstate, shareBtn2: !prevEstate.shareBtn2 }))
                break;
            case "default":
                break;
        }
        // setShareBtn(!shareBtn)
        console.log(shareEstate)
    }

    return (
        <body>

            <article>
                <div className="drawers-container">
                    <img className="drawers" src={CoreImage} alt="" />
                </div>
                <div className="text-and-profile-container flex flex-col justify-evenly">
                    <div className="text">

                        <h4>
                            Shift the overall look and feel by adding these wonderful
                            touches to furniture in your home
                        </h4>
                        <p>
                            Ever been in a room and felt like something was missing? Perhaps
                            it felt slightly bare and uninviting. I’ve got some simple tips
                            to help you make any room feel complete.
                        </p>
                    </div>
                    <div className="profile-author mt-4">
                        <div className="profile-container">
                            <img className="avatar-michelle" src={AvatarMichelle} alt="" />
                            <p>
                                <span className="name">Michelle Appleton</span>
                                <span className="date">28 Jun 2020</span>
                            </p>
                        </div>
                        <div className="btn-container flex  items-center justify-center">
                            <button
                                onClick={() => handleShareButton(1)}
                                className="share-btn flex  items-center justify-center">
                                <img src={IconShare} alt="" />
                            </button>
                            <button
                                onClick={() => handleShareButton(2)}
                                className="share-btn2 flex justify-center items-center">
                                <img src={IconShare} alt="" className="" />
                            </button>
                        </div>
                    </div>
                </div>
                {shareEstate.shareBtn ?
                    <div className="share-active-desktop hidden flex items-center">
                        <p>Share </p>
                        <a href="">
                            <img src={IconFacebook} alt="" />
                        </a>
                        <a href="">
                            <img src={IconPinterest} alt="" />
                        </a>
                        <a href="">
                            <img src={IconTwitter} alt="" />
                        </a>
                    </div>
                    : ""}

                {shareEstate.shareBtn2 ?
                    <div className="share-active-mobile hidden flex items-center">
                        <p>Share </p>
                        <a href="">
                            <img src={IconFacebook} alt="" />
                        </a>
                        <a href="">
                            <img src={IconPinterest} alt="" />
                        </a>
                        <a href="">
                            <img src={IconTwitter} alt="" />
                        </a>
                        <button
                            onClick={() => handleShareButton(3)}
                            className="share-btn3"><img src={IconShare} alt="" /></button>
                    </div>
                    : ''}
            </article>
        </body >
    )
}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<ArticlePreviewComponent />)