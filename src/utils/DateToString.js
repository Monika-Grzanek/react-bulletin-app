/*export const DateToStr = (dateTime) => {
    let date = new Date(dateTime);
    let NewDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return NewDate
}*/

export const DateToStr = (dateObj) => {
    return dateObj.toISOString().slice(0, 10).split('-').reverse().join('/');
};