export const getSrcIframe = (VideoID: string) => {
    const regex = /'([^']*)'/;
    const srcSubstring = VideoID.split(' ').find(item => item.includes('src='));
    const match = srcSubstring.match(regex);

    return match[1];
}