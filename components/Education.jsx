export default function Education () {
return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 id="work" className="secondary-title">Education</h2>
           

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-6 ">

              <div className=" border border-nav h-72 px-16 py-12 flex flex-col flex-wrap justify-evenly ">
                <h2 className="text-2xl font-semibold">Generation Thailand</h2>
                <div className="w-full lg:w-auto flex flex-wrap justify-start gap-3 mt-6 mb-8">
                    <div className="badge">Jan 2022 - Apr 2022</div>
                  </div>
                <p>Junior Software Developer Program </p>
              </div>
              
              <div className=" border border-nav h-72 px-16 py-12 flex flex-col flex-wrap justify-evenly ">
                <h2 className="text-2xl font-semibold">Kasetsart University</h2>
                <div className="w-full lg:w-auto flex flex-wrap justify-start gap-3 mt-6 mb-8">
                    <div className="badge">2018 - 2022</div>
                  </div>
                <p>Bachelor of Engineering</p>
              </div>
             
          
            </div>
            
          </section>
        </div>

)

}