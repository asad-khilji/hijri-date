function calculateHijriDate() {
    const gregorianDate = document.getElementById("gregorianDate").value;
    if (!gregorianDate) {
      document.getElementById("result").innerHTML = "Please select a date.";
      return;
    }

    const date = new Date(gregorianDate);
    const hijriDate = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);

    document.getElementById("result").innerHTML = `Hijri Date: ${hijriDate}`;
  }