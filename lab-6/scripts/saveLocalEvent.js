function restoreScheduleFromLocalStorage() {
    const workDays = localStorage.getItem('event');
    const number = localStorage.getItem('number');

    console.log(workDays)
    console.log(number)

    if (workDays && number) {
        document.getElementById('event').value = workDays;
        document.getElementById('number').value = number;
        generateSchedule(new Event('submit'));

    }
}

restoreScheduleFromLocalStorage();
