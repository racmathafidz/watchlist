export default function durationFormater(duration) {
    const hours = Math.floor(duration / 60)
    const minute = duration % 60
    
    return `${hours}h ${minute}m`
}