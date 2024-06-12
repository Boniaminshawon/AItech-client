

const WorkProcess = () => {
    return (
        <div className="bg-[#f7f9fe] md:py-10 lg:py-9 py-6 font-primary">
             <div className=" flex justify-center flex-col items-center">
                <p className="text-[#2d4a8a] font-medium text-center md:text-xl text-lg  md:mb-2">How It Work</p>
                <p className="text-center md:text-4xl text-[26px] font-bold  text-[#263045] ">Check Out Our <span className=" text-[#2d4a8a] font-secondary"><i>Process </i></span></p>
                <p className="border-[3px]  rounded-b-xl border-[#2D4A8A] w-[110px] mt-2 md:mt-4"></p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:mt-12 mt-7">
                {/* part 1 */}
                <div className="  ">
                    <div className="flex flex-col justify-center items-center ">
                        <img className="rounded-full p-2 bg-white border-[4px] border-[#d5d5d5] md:h-[209px] md:w-[209px] h-[180px] w-[180px]  hover:border-[#2d4a8a]" src="https://i.ibb.co/ydkLPGd/step-one.jpg" alt="" />
                        <div className="relative ">
                        <p className="bg-[#2d4a8a] rounded-full w-[50px] h-[50px] text-xl flex items-center justify-center text-white text-center font-bold absolute  -right-5 -bottom-4 " >01</p>
                        </div>
                        <h3 className="font-bold text-2xl md:mb-3 mb-2 md:mt-7 mt-6">Choose a Service</h3>
                        <p className="text-[#6e6e6e] px-4 text-lg text-center"> Select from our range of specialized software development services tailored to meet your business needs.</p>
                    </div>
                </div>
                {/* part 2 */}
                <div className="  ">
                    <div className="flex flex-col justify-center items-center ">
                        <img className="rounded-full p-2 mt-5 md:mt-0 bg-white border-[4px] border-[#d5d5d5] md:h-[209px] md:w-[209px] h-[180px] w-[180px]   hover:border-[#2d4a8a]" src="https://i.ibb.co/VHDjV0K/step-two.jpg" alt="" />
                        <div className="relative ">
                        <p className="bg-[#2d4a8a] rounded-full w-[50px] h-[50px] text-xl flex items-center justify-center text-white text-center font-bold absolute  -right-5 -bottom-4 " >02</p>
                        </div>
                        <h3 className="font-bold text-2xl md:mb-3 mb-2 md:mt-7 mt-6">Request a Meeting</h3>
                        <p className="text-[#6e6e6e] px-4 text-lg text-center">Schedule a consultation to discuss project details, requirements, and goals with our expert team.</p>
                    </div>
                </div>
                {/* part 3*/}
                <div className="  ">
                    <div className="flex flex-col justify-center items-center ">
                        <img className="rounded-full p-2 mt-5 md:mt-5 lg:mt-0 bg-white border-[4px] border-[#d5d5d5]  md:h-[209px] md:w-[209px] h-[180px] w-[180px]  hover:border-[#2d4a8a]" src="https://i.ibb.co/PzYqTmc/step-three.jpg" alt="" />
                        <div className="relative ">
                        <p className="bg-[#2d4a8a] rounded-full w-[50px] h-[50px] text-xl flex items-center justify-center text-white text-center font-bold absolute  -right-5 -bottom-4 " >03</p>
                        </div>
                        <h3 className="font-bold text-2xl md:mb-3 mb-2 md:mt-7 mt-6">Start Process</h3>
                        <p className="text-[#6e6e6e] px-4 text-lg text-center"> Begin the development phase where our professionals create and implement your custom software solution.</p>
                    </div>
                </div>
                {/* part 4 */}
                <div className="  ">
                    <div className="flex flex-col justify-center items-center ">
                        <img className="rounded-full mt-5 md:mt-5 lg:mt-0 p-2 bg-white border-[4px] border-[#d5d5d5]  md:h-[209px] md:w-[209px] h-[180px] w-[180px]  hover:border-[#2d4a8a]" src="https://i.ibb.co/Fw6s7kc/step-four.jpg" alt="" />
                        <div className="relative ">
                        <p className="bg-[#2d4a8a] rounded-full w-[50px] h-[50px] text-xl flex items-center justify-center text-white text-center font-bold absolute  -right-5 -bottom-4 " >04</p>
                        </div>
                        <h3 className="font-bold text-2xl md:mb-3 mb-2 md:mt-7 mt-6">Deliver Result</h3>
                        <p className="text-[#6e6e6e] px-4 text-lg text-center"> Receive the completed project, fully tested and seamlessly integrated, ready to drive your business forward.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;

{/* <img src="https://i.ibb.co/8xLh5fx/process-arrow.png" alt="" /> */ }

