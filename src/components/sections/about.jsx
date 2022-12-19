import React from "react";

export default function Abouts() {
    return(
        <>
            <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-neutral-50">

          </div>
          <div className="container relative mx-auto">
  <div className="items-center flex flex-wrap">
    <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
      <div className="px-12">
        <h1 className="text-[#205C6C] font-semibold text-5xl font-playfair py-10">
          What do we do?
        </h1>
        <br></br>
        <p className="mt-4 text-lg text-[#205C6C] font-Source">
          As a film studio we have chosen to create such art with social impacts. To us, creating a film is more than a part of entertainment. We are here to tell the stories that makes you “YOU”, the stories that has a purpose to serve people a better insight, the stories that will leave someone swirling in his/her own thoughts and last but not the least, the stories that will inspire people to live creatively. The mixture of bringing goodness to the society and urge to remove skeptical thoughts is what makes us a strong team as the Kathaks.
        </p>
      </div>
    </div>
  </div>
</div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
           
          </div>
        </div>

        <section className="py-20 bg-[#205C6C] -mt-24">
          <div className="container mx-auto px-4">
            


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-neutral-50 font-playfair">
                 Our vision
                </h3>
                <p className="text-lg  leading-relaxed mt-4 mb-4 text-neutral-50 pt-10 font-Source">
                From many aspects of creation of art through the lens of the cameras, we want to ignore the tendency of recreating masterpieces and rather make our own masterpiece. The cultural shift of southern people with the taste of east and west has created an urge among us to enjoy the modern era with the pleasure of our roots. So our vision is to create motion pictures without getting dazzled with the shiny modernization. So, that people will be able to connect the whole production with their day to day lives.

                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-neutral-50 pt-10 font-Source">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you're good to go. Just make sure you enable them first via
                  JavaScript.
                </p> */}
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-neutral-50">
                  <img
                    alt="..."
                    src="/assets/kathak.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-neutral-50 fill-current"
                      ></polygon>
                    </svg>
                    {/* <h4 className="text-xl font-bold text-[#205C6C] font-playfair">
                      Top Notch Services
                    </h4> */}
                    <p className="text-md  mt-2 text-[#205C6C] font-Source">
                    The word “Kathak” itself describes our mission which means a storyteller. We believe that our creative excellence can be reflected in our client’s potentiality. 
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/assets/studio.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-3xl font-semibold font-playfair">
                    Our mission
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600 font-Source">
                  As a film studio, we have a general mission to depict a story in a creative way. We are here to provide facilities to create any sort of motion pictures. There’s a famous saying of Stanly Kubrick “If it can be written, or thought, can be filmed”. The studio facilities show the credibility in the part of execution of this saying. With due respect to art, the thought of leaving a visual footprint is our core responsibility with a mission to create the art that connects people.

                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-[#205C6C] mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 font-Source">
                            Creative excellence
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-[#205C6C] mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 font-Source">Bringing stories to life</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-[#205C6C] mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 font-Source">Unbiased and unique</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48 bg-[#205C6C]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold font-playfair text-neutral-50">
                  Here are our heroes
                </h2>
                <p className="text-lg leading-relaxed m-4 text-neutral-50 font-Source">
                  The team at kathak that makes all of this possible, turining ideas into reality and pushing the barrier of what's possible and what's not.
                </p>
              </div>
            </div>
            

        <div className="grid grid-cols-3 place-content-center gap-4 lg:grid lg:grid-cols-3 lg:Lplace-content-center lg:gap-4 sm:grid sm:grid-cols-1 sm:place-content-center sm:gap-4 ">

        <div className="w-full max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="/assets/sian.jpg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Saad mahmud</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Creative Director</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <p>hello</p>
                </div>
            </div>
      </div>

      <div className="w-full max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="/assets/fardin.jpeg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Fardin Mahmud</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Associate Creative Director</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <p>hello</p>
                </div>
            </div>
      </div>

      <div className="w-full max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/raju.jpeg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sayed Anwar Raju</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Managing Director</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <p>hello</p>
                </div>
            </div>
      </div>

      <div className="w-full max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="/assets/muna.jpeg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Muna</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <p>hello</p>
                </div>
            </div>
      </div>

      <div className="w-full max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="/assets/sifat.jpeg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">sifat</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <p>hello</p>
                </div>
            </div>
      </div>
      <div className="w-full max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="/assets/nafi.jpg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nafiur Rahman</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Research and Development</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                <span className="text-sm text-neutral-900 dark:text-gray-400 text-center">“Sometimes science is more art than science.” — Rick</span>
                </div>
            </div>
      </div>

        </div>
            
          </div>
        </section>

        <section className="relative block bg-neutral-50 pt-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-neutral-50 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-[#205C6C] font-playfair">
                What makes us different?
                </h2>
                {/* <p className="text-lg leading-relaxed mt-4 mb-4 text-[#205C6C] font-Source">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                
                <h6 className="text-xl mt-5 font-semibold text-[#205C6C] font-playfair">
                Appealing and entertaining.

                </h6>
                <p className="mt-2 mb-4 text-[#205C6C] font-Source">
                  We strive to make our products as appealing and entertaining as possible as well as being incluesive and accessible and unbiased. 
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                
                <h5 className="text-xl mt-5 font-semibold text-[#205C6C] font-playfair">
                Encouraging new ideas 
                </h5>
                <p className="mt-2 mb-4 text-[#205C6C] font-Source">
                  Here at kathak we always encourage new ideas and new ways of thinking.
                  That is why we always try to explore new ideas and new ways of thinking.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                
                <h5 className="text-xl mt-5 font-semibold text-[#205C6C] font-playfair">
                Emotion over profit
                </h5>
                <p className="mt-2 mb-4 text-[#205C6C] font-Source">
                  We want to make sure that we are always improving and evolving along with our core goals that is to put profit later and emphasize the emotion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
        </>
    )
}