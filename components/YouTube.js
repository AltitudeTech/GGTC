import YouTube from "./YouTubePlayer";

// const opts = {
//   // playlist: 'RDjsur8561',
//   height: '160',
//   width: '310',
//   playerVars: { // https://developers.google.com/youtube/player_parameters
//     autoplay: 1
//   }
// };

export default () => <YouTube
  list="PLKYsXu_eCg8egEVAwqul6qCO8zfnxDA3c"
  listType="playlist"
  autoplay={true}
  // autoplay={false}
  // height={160}
  // width={310}
/>
