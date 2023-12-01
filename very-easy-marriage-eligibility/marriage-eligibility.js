function isMarriageEligible(age, gender) {
  if (!age || !gender) {
    console.log("Age and gender are required");
    return;
  }
  if (gender === "boy" && age >= 21) {
    console.log("yes");
    return;
  }
  if (gender === "girl" && age >= 18) {
    console.log("yes");
    return;
  }
  console.log("no");
}

isMarriageEligible(23, "boy");
isMarriageEligible(21, "boy");
isMarriageEligible(16, "boy");
isMarriageEligible(23, "girl");
isMarriageEligible(18, "girl");
isMarriageEligible(16, "girl");
isMarriageEligible();
