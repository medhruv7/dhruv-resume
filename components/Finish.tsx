import {AiFillHeart} from 'react-icons/ai';

const Finish = () => {
    return (
        <div>
            <div className="text-2xl font-semibold p-4 mt-20 flex items-center space-x-4 justify-center">
                <div>Thank You for taking the time out to read out my resume !! </div>
                 <AiFillHeart />
            </div>
            <div className='text-lg font-normal p-4 mt-20'>
                You can find the source code for this resume website in this repository : <a href='https://github.com/medhruv7/dhruv-resume' target="_blank" className='font-semibold text-cyan-700'>https://github.com/medhruv7/dhruv-resume</a>
            </div>
            <div className='text-lg font-normal p-4'>
                You can download the pdf version of the resume from : <a href='/Dhruv_Resume_latest.pdf' target="_blank" className='font-semibold text-cyan-700'>here</a>
            </div>
        </div>
    )
}

export default Finish;