export const createImageLink = (path) => "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + path;

export const apiKey = () => "5caf874273953bc95939be6c5400933a";

export const circleStyle = (percentage) => {
    return {
        path: {
            stroke: percentage < 70 ? 'rgba(238,223,0,0.8)' : '#2ad63a'
        },
        background: {
            fill: 'rgba(235,239,239,0.19)'
        }
    }
};
