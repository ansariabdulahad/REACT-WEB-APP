import './Meeting.css';

const Meeting = () => {
    const design = (
        <>
            <div className="video-box">
                <video width="100%" autoPlay muted loop>
                    <source src="video-3.mp4" width="100%"></source>
                </video>
                <div className='box-shadow d-flex justify-content-center align-items-center text-white'>
                    <div>
                        <h2 >Introducing</h2>
                        <h1 className='mb-3 mt-3 large-header'>AN NEW REACT JS BATCH</h1>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button className='btn btn-success mt-3 py-2 fw-bold px-5 font-monospace learn-btn'>Learn More</button>
                            <h2>~ By Just For Code</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    return design;
}

export default Meeting;