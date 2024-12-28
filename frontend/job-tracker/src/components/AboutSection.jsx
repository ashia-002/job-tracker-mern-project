import illustration from '../assets/AboutSectionillustration02.svg'
const AboutSection = () => {
    return (
        <section className="flex justify-center text-left py-16 px-28 gap-6">
            <div>
                <h2 className="text-3xl text-textPrimaryColor mb-4 leading-tight">
                    Streamline Your Job Hunt
                    <span className="block text-textThemeColor font-themeFont">Journey</span>
                </h2>
                <h2 className="text-xl text-textSecondary02Color">
                    About this Project.
                </h2>
                <p className="text-textSecondary01Color text-left text-balance mb-8 w-96">
                    As fresh graduates, navigating the job search can be
                    overwhelming—managing applications, tracking deadlines,
                    and staying prepared for interviews. This platform is
                    designed to simplify your job hunt by reducing the time
                    spent organizing and minimizing stress. Focus on what truly
                    matters—preparing for your dream job—while our application
                    helps you stay on top of every opportunity with ease.
                </p>
            </div>
            <div className="flex-shrink-0 max-w-96">
                <img
                    src={illustration}
                    alt="A person sitting at a desk using a laptop for job hunting"
                    className="max-w-full h-auto"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default AboutSection;