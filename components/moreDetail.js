/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { moneyFormatter } from '../utils/moneyFormatter';

export default function moreDetail(props) {
  const { detailData, movie, tvShows } = props;

  if (movie === true) {
    return (
      <div className="containers px-3 sm:px-5 xl:px-0 my-5">
        <h1 className="text-3xl pb-1">More Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-1 lg:gap-4">
          <div className="flex flex-col">
            <h1 className="mt-1 text-base sm:text-lg text-gray-300">Status</h1>
            <h1 className="mt-1 text-sm sm:text-base">{detailData.status ? detailData.status : '-'}</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-1 text-base sm:text-lg text-gray-300">Language</h1>
            <h1 className="mt-1 text-sm sm:text-base">
              {detailData.spoken_languages ? detailData.spoken_languages.map((items, index) => {
                if (index === detailData.spoken_languages.length - 1) {
                  return items.english_name;
                }
                return `${items.english_name}, `;
              }) : '-'}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-1 text-base sm:text-lg text-gray-300">Budget</h1>
            <h1 className="mt-1 text-sm sm:text-base">
              {detailData.budget === 0 ? '-' : moneyFormatter.format(detailData.budget)}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-1 text-base sm:text-lg text-gray-300">Revenue</h1>
            <h1 className="mt-1 text-sm sm:text-base">
              {detailData.revenue === 0 ? '-' : moneyFormatter.format(detailData.revenue)}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  if (tvShows === true) {
    return (
      <div className="containers px-3 sm:px-5 xl:px-0 my-5">
        <h1 className="text-3xl pb-1">More Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-1 lg:gap-4">
          <div className="flex flex-col">
            <h1 className="mt-1 text-base sm:text-lg text-gray-300">Creator</h1>
            <h1 className="mt-1 text-sm sm:text-base">
              {detailData.created_by.length <= 0 ? '-' : detailData.created_by[0].name}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-1 text-base sm:text-lg text-gray-300">Status</h1>
            <h1 className="mt-1 text-sm sm:text-base">{detailData.status ? detailData.status : '-'}</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-1 text-base sm:text-lg text-gray-300">Languages</h1>
            <h1 className="mt-1 text-sm sm:text-base">
              {detailData.spoken_languages ? detailData.spoken_languages.map((items, index) => {
                if (index === detailData.spoken_languages.length - 1) {
                  return items.english_name;
                }
                return `${items.english_name}, `;
              }) : '-'}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-1 text-base sm:text-lg text-gray-300">Network</h1>
            <h1 className="mt-1 text-sm sm:text-base">
              {detailData.networks.length <= 0 ? '-' : detailData.networks[0].name}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
