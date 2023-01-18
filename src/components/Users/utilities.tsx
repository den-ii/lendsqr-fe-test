export const status = (activeDate: string, loan: string) => {
  const date = parseInt(activeDate.slice(0, 4));
  if (date > 2050) {
    return {
      status: "Pending",
    };
  } else if (date > 2023 && date < 2050) {
    return {
      status: "Active",
    };
  } else if (date > 2020 && date < 2030) {
    return {
      status: "Inactive",
    };
  } else if (date < 2020 && loan) {
    return {
      status: "Inactive",
    };
  }
};

const checkTime = (time: string) => {
  const Time = time.split(":");
  let numTime = parseInt(Time[0]);
  const timezone = numTime > 12 ? "AM" : "PM";
  if (numTime > 12) {
    numTime = numTime - 12;
  }
  return `${numTime.toString()}:${Time[1]} ${timezone}`;
};

export const convertDate = (date: string) => {
  const newDate = new Date(date);
  const formedDateArr = newDate.toString().split(" ");
  const time = formedDateArr[4].slice(0, 5);
  const formedTime = checkTime(time);
  let newFormedDate = `${formedDateArr[1]} ${formedDateArr[2]}, ${formedDateArr[3]} ${formedTime}`;
  return newFormedDate;
};

export const option = ["Active", "Inactive", "Blackisted", "Pending"];
