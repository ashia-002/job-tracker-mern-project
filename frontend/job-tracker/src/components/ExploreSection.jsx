import googlelogo from '../assets/GoogleJobs Logo.svg'
import linkedinlogo from '../assets/LinkedIn Logo.svg'
import indeedlogo from '../assets/Indeed Logo.svg'
import glassdoorlogo from "../assets/GlassDoor Logo.svg";
import upworklogo from '../assets/UpWork Logo.svg'
const ExploreSection = () => {
    return (
        <section className=" text-center py-20 px-28">
            <h2 className="text-3xl text-textPrimaryColor pb-7">
                Let’s explore the place to earn.
            </h2>
            <div className='flex justify-center gap-8 job-links'>
                <a href="https://www.google.com/about/careers/applications/" target="_blank" rel="noopener noreferrer">
                    <img src={googlelogo} alt='googleLogo' />
                </a>
                <a href="https://www.linkedin.com/jobs" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinlogo} alt='googleLogo' />
                </a>
                <a href="https://www.indeed.com/?from=gnav-homepage" target="_blank" rel="noopener noreferrer">
                    <img src={indeedlogo} alt='googleLogo' />
                </a>
                <a href="https://www.glassdoor.com/index.htm" target="_blank" rel="noopener noreferrer">
                    <img src={glassdoorlogo} alt='googleLogo' />
                </a>
                <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">
                    <img src={upworklogo} alt='googleLogo' />
                </a>
            </div>
        </section>
    );
};

export default ExploreSection;