import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles.css'
import IconPlus from './assets/images/icon-plus.svg'
import IconMinus from './assets/images/icon-minus.svg'
import DesktopBG from './assets/images/background-pattern-desktop.svg'
import IconStar from './assets/images/icon-star.svg'




export default function FaqAccordion() {
    const [accState, setAccState] = useState([
        {
            id: 1,
            question: 'What is Frontend Mentor, and how will it help me?',
            answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript.It's suitable for all levels and ideal for portfolio building.",
            status: false,
        },
        {
            id: 2,
            question: 'Is Frontend Mentor free?',
            answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
            status: false,
        },
        {
            id: 3,
            question: 'Can I use Frontend Mentor projects in my portfolio?',
            answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
            status: false,
        },
        {
            id: 4,
            question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
            status: false,
        },
    ])

    function toggleAnswer(id) {
        closeAllAnswers(id)
        setAccState(prevState =>
            prevState.map(item =>
                item.id == id ?
                    { ...item, status: !item.status } : { ...item }
            )
        )
    }

    function closeAllAnswers(id) {
        setAccState(prevState =>
            prevState.map(item =>
                item.id != id ?
                    { ...item, status: false }
                    :
                    { ...item }
            )
        )
    }

    let vg = `bg-[${DesktopBG})]`
    return (
        <div className="flex justify-center items-center h-screen rounded" style={{ backgroundImage: `url(${DesktopBG})` }} >
            <div id='accordion-card' className="absolute flex flex-col justify-center gap-5 md:w-[500px] h-[450px] mobile-card md:bg-white rounded-[25px] p-5">
                <div className="title absolute top-12 flex gap-2 text-4xl font-bold text-[#2f1533] mb-10">
                    <img src={IconStar} alt="" className="img-title" /><h1>FAQs</h1>
                </div>
                <div className='flex flex-col mt-10 gap-4'>

                    {accState.map(({ id, question, answer, status }) => {

                        return (
                            <div key={id} className="mt-2 relative ">
                                <button className="accordion flex text-left w-[99%]  justify-between items-center font-bold text-sm text-[#2f1533] " onClick={() => toggleAnswer(id)}>
                                    <p>{question}</p> {status ? (<img src={IconMinus} alt="" />) : (<img src={IconPlus} alt="" />)}
                                </button>

                                <div className={`content mt-2 text-[#8c6991] overflow-hidden transition-[max-height] duration-400 ease-in-out delay-400 ${status ? 'max-h-40' : 'max-h-0'}`}>
                                    <p>
                                        {answer}
                                    </p>
                                </div>

                                {/* {status &&
                                } */}
                            </div>
                        )
                    })}
                </div>

            </div >
        </div >
    )
}

console.log('lolaso')

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<FaqAccordion />)