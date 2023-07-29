function convSecondsToFancyTime(seconds: number): string{
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    let ret = '';
    ret = minutes + ':' + (remainderSeconds < 10 ? '0' : '');
    ret += remainderSeconds;
    
    return ret;
}

export default convSecondsToFancyTime