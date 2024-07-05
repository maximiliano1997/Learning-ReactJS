import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
// import { ratingData, thankyouData } from './data/data'
import IconStar from './images/icon-star.svg'
import IconThankYou from './images/illustration-thank-you.svg'
import './assets/styles.css'

function InteractiveRatingComponent() {
    const [submit, setSubmit] = useState(0)
    const [data, setData] = useState({
        ratingData: {
            buttons: ['1', '2', '3', '4', '5'],
            title: 'How did we do?',
            text: 'Plase let us know how we did with your support request. All Feedback is appreciated to help us improve our offering!',
        }, thankyouData: {
            msgEvent: `You selected 0 out of 5.`,
            title: 'Thank You!',
            text: "We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!",
        }
    })
    const value = { data, setData, submit, setSubmit }

    // console.log(submitState)
    return (
        <div className='
        h-screen bg-[hsl(216,12%,8%)] text-white flex flex-col justify-center items-center text-left'>
            {!submit ?
                <RatingState value={value} />
                :
                ''}

            {submit ?
                <ThankYouState value={value} />
                :
                ''}

        </div>
    )
}


function RatingState({ value }) {
    const { data, setData, setSubmit, submit } = value
    const { ratingData, thankyouData } = data

    const [selected, setSelected] = useState(0)

    const handleClick = (value) => {
        setData((prevData) => ({
            ...prevData,
            thankyouData: {
                ...prevData.thankyouData,
                msgEvent: `You selected ${value} out of 5`
            }
        }))

        setSelected(value)

        // if ()
        // console.log(data)
        // console.log(value)
    }

    return (

        <div className="card flex flex-col justify-between w-[410px] h-[360px] p-5 bg-[hsl(213,19%,18%)] border border-transparent rounded-[14px]" id="rating-card">
            <div className="icon-container h-[40px] w-[40px] flex justify-center items-center text-center  rounded-full bg-[#2d3239]">
                <img src={IconStar} alt="" className="icon-star w-[15px]" />
            </div>
            <div className="text-container flex flex-col gap-4 font-[700] font-[sans-serif] font-[Overpass]">

                <h2 className="h2-title text-[20px] font-extrabold">{ratingData.title}</h2>
                <p className="p-text text-[14px] font-bold text-[#959eac]">
                    {ratingData.text}
                </p>
            </div>
            <div className="rating-container flex justify-center">
                <div className="buttons-container flex justify-between w-[90%]">
                    {ratingData.buttons.map((item, index) => {
                        console.log(index)
                        return (
                            <button key={item} onClick={() => handleClick(item)} className={`bts w-[50px] h-[50px] ${selected == item ? 'text-black bg-white' : 'bg-[#343942] text-white'} border-transparent rounded-full hover:bg-white hover:text-black`}>
                                {item}
                            </button>

                        )
                    })}
                </div>
            </div>
            <button type="submit" className="submit bg-[#fb7413] w-[80%] h-[35px] self-center mt-[20px] text-[20px] font-bold text-black border-transparent rounded-[16px] hover:bg-white" onClick={() => (setSubmit(1))}>Submit</button>
        </div >

    )
}

function ThankYouState({ value }) {
    const { data } = value
    const { ratingData, thankyouData } = data


    return (
        <>
            <div className="card flex flex-col justify-center text-center w-[410px] h-[360px] p-3 bg-[hsl(213,19%,18%)] border border-transparent rounded-[14px]" id="thank-you-card">
                <div className="thank-you-icon-container flex flex-col justify-between">
                    <img src={IconThankYou} alt="" className="icon-thank-you w-[200px] place-self-center m-2" />
                    <p className="msg-selection w-[60%] self-center text-[15px] font-bold bg-[#343942] text-orange-600 rounded-[15px] p-2 m-2">{thankyouData.msgEvent}</p>
                </div>
                <div className="">
                    <h2 className="h2-title font-bold text-[25px] m-2">{thankyouData.title}</h2>
                    <p className="p-text font-[500] text-gray-500">
                        {thankyouData.text}
                    </p>
                </div>
            </div>
        </>
    )
}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<InteractiveRatingComponent />)  