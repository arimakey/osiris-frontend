import { useState } from 'react'
import questions from '../data/questions'

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="text-white p-8">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-8 text-center">Preguntas frecuentes</h1>
            <div className="max-w-3xl mx-auto space-y-4">
                {questions.map((faq, index) => (
                    <div key={index} className="bg-[#111013] rounded-lg overflow-hidden">
                        <button
                            className="w-full text-left p-4 flex justify-between items-center"
                            onClick={() => toggleQuestion(index)}
                        >
                            <h2 className="text-sm md:text-base xl:text-lg font-semibold">{faq.question}</h2>
                            <span className={`transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                                }`}>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <p className="p-4 bg-[#25242D] text-gray-400 text-xs  xl:text-sm">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}