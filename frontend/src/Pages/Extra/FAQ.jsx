import React, { useEffect, useState } from 'react'
import SingleBanner from '../../Components/Banners/SingleBanner.jsx'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'


const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [activesection, setactivesection] = useState(0)


  const faq = [
    {
      id: 1,
      question: 'What was the tech stack for this website?',
      answer: 'The website (ID: 1) utilized a tech stack comprising Spring Boot for the backend, SupaBase and AWS S3 for the database, and Vite + SCSS for the frontend. This combination ensured robust functionality, efficient data management, and a streamlined user interface. '
    },
    {
      id: 2,
      question: 'Why @Prozar?',
      answer:"@Prozar offers a unique opportunity to connect consumers directly with local farmers and producers in Romania. It serves as a platform where users can conveniently purchase fresh, traditional, locally produced products, promoting the concept of buying local without the involvement of third-party distributors and stores. This fosters a direct and transparent relationship between customers and producers, supporting local communities and encouraging sustainable consumption."},
    {
      id: 3,
      question:"What was the duration of the development process for @Prozar?",
      answer: "The development of @Prozar has been ongoing, and it is currently in its third sprint, which spans a period of approximately five weeks. However, it should be noted that @Prozar is still a work in progress, with further enhancements and refinements being implemented."
    },
    {
      id: 4,
      question: 'What we learned from @Prozar?',
      answer: "Working on @Prozar has provided valuable learning experiences. We gained expertise in developing a full-stack application using Spring Boot for the backend and React for the frontend. Additionally, we acquired knowledge in implementing a cloud database, ensuring security measures, and integrating a payment method. Furthermore, the project allowed us to become proficient in managing multiple sprint projects and organizing them effectively using the Scrum methodology."},

  ]

  return (
    <div className='extrapage'>
      <SingleBanner
        heading="FAQs"
        bannerimage='https://images.unsplash.com/photo-1665789318391-6057c533005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
      />
      {/* <p>faq</p> */}

      <div className='faqcontainer'>
        {/* {
          activesection == 1 ?
            <div className='faq'>
              <div className='faqhead'>
                <h1>What is Lorem Ipsum?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setactivesection(0)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className='faqbody'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            :
            <div className='faq'>
              <div className='faqhead'>
                <h1>What is Lorem Ipsum?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setactivesection(1)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
            </div>
        } */}


        {
          faq.map((item, index) => {
            return (
              activesection == item.id ?
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>
                      {item.question}
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(0)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className='faqbody'>
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </div>
                :
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>{item.question}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(item.id)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                  </div>
                </div>
            )
          })
        }


      </div>


      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default FAQ