export const DateToStr = (dateTime) => {
    let date = new Date(dateTime);
    let NewDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return NewDate
}