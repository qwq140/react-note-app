export const formatCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString()+" "+date.toLocaleTimeString();
}