$("#btnSend").click(function () {
    //Assigning variable final with the calculation of each score provided my user
    let final = ((parseFloat($("#AssGrade").val()) / 100) * 50) + ((parseFloat($("#GroupGrade").val()) / 100) * 10) + ((parseFloat($("#QGrade").val()) / 100) * 10) + ((parseFloat($("#MidGrade").val()) / 100) * 10) + ((parseFloat($("#FinalGrade").val()) / 100) * 10) + ((parseFloat($("#IntexGrade").val()) / 100) * 10);
    //Defining variable letterGrade
    let letterGrade;
    // Use of case like an if-else statement to run through all letter grade possibilities
    switch (true) {
        case (final >= 94):
            letterGrade = "A";
            break;
        case (final >= 90):
            letterGrade = "A-";
            break;
        case (final >= 87):
            letterGrade = "B+";
            break;
        case (final >= 84):
            letterGrade = "B";
            break;
        case (final >= 80):
            letterGrade = "B-";
            break;
        case (final >= 77):
            letterGrade = "C+";
            break;
        case (final >= 74):
            letterGrade = "C";
            break;
        case (final >= 70):
            letterGrade = "C-";
            break;
        case (final >= 67):
            letterGrade = "D+";
            break;
        case (final >= 64):
            letterGrade = "D";
            break;
        case (final >= 60):
            letterGrade = "D-";
            break;
        default:
            letterGrade = "E";
    }
    //Printing LetterGrade back to form
    $("#LetterGrade").val(final + " (" + letterGrade + ")");
});