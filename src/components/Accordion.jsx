import { useState } from 'react'

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(null)

    const preguntas = [
        {
            question: "What's in the box?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed suscipit praesentium fuga autem maiores quaerat molestias distinctio reiciendis quae iste soluta assumenda minus quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat aliquid consectetur velit, reiciendis sed ipsa. Tenetur laborum repellat, officiis corrupti illo, culpa laboriosam provident voluptate laudantium, odit quis ipsa."
        },
        {
            question: "¿Quién engañó a Roger Rabbit?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed suscipit praesentium fuga autem maiores quaerat molestias distinctio reiciendis quae iste soluta assumenda minus quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat aliquid consectetur velit, reiciendis sed ipsa. Tenetur laborum repellat, officiis corrupti illo, culpa laboriosam provident voluptate laudantium, odit quis ipsa."
        },
        {
            question: "What's in the box?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed suscipit praesentium fuga autem maiores quaerat molestias distinctio reiciendis quae iste soluta assumenda minus quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat aliquid consectetur velit, reiciendis sed ipsa. Tenetur laborum repellat, officiis corrupti illo, culpa laboriosam provident voluptate laudantium, odit quis ipsa."
        },
        {
            question: "What's in the box? ",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed suscipit praesentium fuga autem maiores quaerat molestias distinctio reiciendis quae iste soluta assumenda minus quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat aliquid consectetur velit, reiciendis sed ipsa. Tenetur laborum repellat, officiis corrupti illo, culpa laboriosam provident voluptate laudantium, odit quis ipsa."
        }
    ]

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="min-h-screen text-white p-8">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-8 text-center">Preguntas frecuentes</h1>
            <div className="max-w-3xl mx-auto space-y-4">
                {preguntas.map((faq, index) => (
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