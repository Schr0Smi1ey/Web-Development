function calculateFinalScore(obj) {
    if(typeof obj !== "object" || obj === null) {
        return "Invalid Input ";
    }
    let score = 0;
    score += obj.testScore;
    score += obj.schoolGrade;
    if(obj.isFFamily) {
        score += 20;
    }
    return score >= 80;
}
