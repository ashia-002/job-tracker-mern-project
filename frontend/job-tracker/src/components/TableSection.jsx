import { Link } from 'react-router-dom';
import tableimage from '../assets/Tracker section.svg'
const TableSection = () => {
    return (
        <section className=" text-center py-16 px-28">
            <div>
                <h2 className="text-3xl text-textPrimaryColor mb-4">
                    Your Tracked <span className="text-textThemeColor font-themeFont">Jobs</span>
                </h2>
                <p className="text-textSecondary01Color text-center mb-8 px-32">
                    Track your job applications in one place with company details,
                    statuses, and quick actions. Use search and filters to stay
                    organized and in control.
                </p>

            </div>

            <div className='table-link'>
                <Link to="/tracker">
                    <img src={tableimage} alt='Tableimg' />
                </Link>
            </div>

        </section>
    );
};

export default TableSection;