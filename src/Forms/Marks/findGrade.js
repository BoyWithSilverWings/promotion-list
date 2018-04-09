function ninethGrade(percentage) {
  let grade;
  const roundPer = parseInt(percentage / 10);
  switch (roundPer) {
    case 10:
      return "A+";
    case 9:
      return "A+";
    case 8:
      return "A";
    case 7:
      return "B+";
    case 6:
      return "B";
    case 5:
      return "C+";
    case 4:
      return "C";
    case 3:
      return "D+";
    case 2:
      return "D";
    default:
      return "E";
  }
}

function eighthGrade(percentage) {
  if (percentage >= 75) {
    return "A";
  } else if (percentage >= 60) {
    return "B";
  } else if (percentage >= 45) {
    return "C";
  } else if (percentage >= 33) {
    return "D";
  } else {
    return "E";
  }
}

function findGrade(standard, percentageList) {
  switch (standard) {
    case "up":
      return percentageList;
    case "eight":
      return percentageList.map(eighthGrade);
    case "nine":
      return percentageList.map(ninethGrade);
    default:
      console.log("Unknown Standard");
  }
}

export default findGrade;
