import durationFormatter from '../utils/durationFormatter'

export default function detailOverview(props) {

    const { detailData, detailMovie, detailTv } = props

    if (detailMovie == true) {
        return (
            <div className="w-full h-full sm:h-96 lg:h-120 xl:h-140">                
                <img 
                    className="w-full sm:w-96 lg:w-128 xl:w-180 h-full sm:h-96 lg:h-120 xl:h-140 sm:object-center sm:object-cover sm:z-0 bg-gradient-to-t from-red-500"
                    src={`https://image.tmdb.org/t/p/original/${detailData.backdrop_path}`} 
                    alt="Backdrop" 
                    align="right"
                />            
                <div className="flex flex-col w-full content-center justify-start px-3 sm:px-5 xl:px-8 sm:z-10 sm:absolute h-full sm:h-96 lg:h-120 xl:h-140 sm:bg-gradient-to-r sm:from-black sm:via-black">
                    <div className="my-auto xl:pb-20 sm:w-1/2">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 mt-4 sm:mt-0 font-medium">{detailData.title}</h1>
                        <p className="sm:text-sm lg:text-base mb-4 text-justify font-light font-description">{detailData.overview}</p>
                        <p 
                            className="sm:text-sm lg:text-base mb-4 font-light font-description"
                        >
                            {detailData.release_date.substring(0,4)} | {durationFormatter(detailData.runtime)} | &nbsp;
                            {detailData.genres.map( (items, index) => {
                                if (index === detailData.genres.length -1) {
                                    return items.name    
                                }
                                return items.name+", "
                            })}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    if (detailTv === true) {
        return (
            <div className="w-full h-full sm:h-96 lg:h-120 xl:h-140">                
                <img 
                    className="w-full sm:w-96 lg:w-128 xl:w-180 h-full sm:h-96 lg:h-120 xl:h-140 sm:object-center sm:object-cover sm:z-0 bg-gradient-to-t from-red-500"
                    src={`https://image.tmdb.org/t/p/original/${detailData.backdrop_path}`} 
                    alt="Backdrop" 
                    align="right"
                />            
                <div className="flex flex-col w-full content-center justify-start px-3 sm:px-5 xl:px-8 sm:z-10 sm:absolute h-full sm:h-96 lg:h-120 xl:h-140 sm:bg-gradient-to-r sm:from-black sm:via-black">
                    <div className="my-auto xl:pb-20 sm:w-1/2">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 mt-4 sm:mt-0 font-medium">{detailData.name}</h1>
                        <p className="sm:text-sm lg:text-base mb-4 text-justify font-light font-description">{detailData.overview}</p>
                        <p 
                            className="sm:text-sm lg:text-base mb-4 font-light font-description"
                        >
                            {detailData.first_air_date.substring(0,4)} | {detailData.number_of_seasons >= 2 ? `${detailData.number_of_seasons} Seasons` : `${detailData.number_of_seasons} Season` } &nbsp; 
                            {detailData.episode_run_time.length <= 0 ? `` : detailData.episode_run_time[0] <= 60 ? `| ${detailData.episode_run_time[0]}m` : `| ${durationFormatter(detailData.episode_run_time[0])}`} | &nbsp;
                            {detailData.genres.map( (items, index) => {
                                if (index === detailData.genres.length -1) {
                                    return items.name    
                                }
                                return items.name+", "
                            })}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}
