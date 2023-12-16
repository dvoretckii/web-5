function generateSchedule(event) {
    event.preventDefault();

    const tableContainer = document.getElementById('tableContainer');
    const scheduleTable = document.createElement('table');
    scheduleTable.id = 'scheduleTable';

    const number = parseInt(document.getElementById('number').value);

    const myEvent = document.getElementById('event').value;
    if (myEvent === 'tournament') {
        const headerRow = scheduleTable.insertRow();
        const nameHeader = headerRow.insertCell();
        nameHeader.textContent = 'Имя участника';
        const armieHeader = headerRow.insertCell();
        armieHeader.textContent = 'Фракция';
        const scoreHeader = headerRow.insertCell();
        scoreHeader.textContent = 'Результат';
        for (let i = 0; i < number; i++) {
            const participantRow = scheduleTable.insertRow();
            const nameCell = participantRow.insertCell();
            nameCell.textContent = 'Имя участника ' + (i + 1);
            const armieCell = participantRow.insertCell();
            armieCell.textContent = 'Фракция ' + (i + 1);
            const scoreCell = participantRow.insertCell();
            scoreCell.textContent = 'Результат ' + (i + 1);
        }
    }
    else if (myEvent === 'paintingDay') {
        const headerRow = scheduleTable.insertRow();
        const nameHeader = headerRow.insertCell();
        nameHeader.textContent = 'Имя участника';
        const armieHeader = headerRow.insertCell();
        armieHeader.textContent = 'Миниатюра для покраса';
        for (let i = 0; i < number; i++) {
            const participantRow = scheduleTable.insertRow();
            const nameCell = participantRow.insertCell();
            nameCell.textContent = 'Имя участника ' + (i + 1);
            const armieCell = participantRow.insertCell();
            armieCell.textContent = 'Название миниатюры ' + (i + 1);
        }
    }

    localStorage.setItem('event', myEvent);
    localStorage.setItem('number', document.getElementById('number').value);
    tableContainer.innerHTML = '';
    tableContainer.appendChild(scheduleTable);


}
