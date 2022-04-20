export default function Projects () {
    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 id="clients" className="secondary-title">Projects</h2>
            <p className="section-paragraph">Projects that I did using MERN stack and HTML CSS and JS</p>

            {/* <!-- Clients --> */}
            <div className="space-y-12 my-16">
              <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* <!-- Client logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img  width="180" src='/images/index.png'/>
                </div>

                {/* <!-- Client info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold">Exornation</h3>

                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                    <div className="badge">MERN</div>

                  </div>

                  <p className="text-secondary">The Main project from Generation Thailand using MERN stack.</p>
                </div>

              </div>
              <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* <!-- Client logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img width="180" src="/images/jamming.ico"/>
                </div>

                {/* <!-- Client info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold">Jamming</h3>

                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">

                    <div className="badge">React</div>
                  </div>

                  <p className="text-secondary">Assessment from codeacdemy </p>
                </div>

              </div>
           
            </div>

          </section>
        </div>
    )
}