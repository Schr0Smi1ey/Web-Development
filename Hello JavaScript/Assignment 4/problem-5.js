
function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }

    let avg = Math.round(sum / waitingTimes.length);
    return (serialNumber - waitingTimes.length - 1) * avg;
}

