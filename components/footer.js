import BrandIcon from './brandIcon'

export default function footer() {
    return (
        <footer className="flex flex-col justify-center py-5 border-t border-truegray-900">
            <div className="flex justify-center items-center mb-3">
                <BrandIcon/>
                <a 
                    href="https://www.themoviedb.org/documentation/api"
                    target="_blank"
                    className="ml-5 mt-2"
                >
                    <img src="/tmdb-logo.svg" alt="TMDB" width="105" height="42"/>
                </a>                
            </div>
            <div className="flex justify-center text-base sm:text-lg font-light">
                <p className="inline-block text-gray-200">
                    Made with &#x2764; by&nbsp;
                </p>
                <a 
                    href="https://github.com/racmathafidz"
                    className="text-red-700"
                    target="_blank"
                >
                    Racmat Hafidz Fadli
                </a>
            </div>
        </footer>
    )
}
