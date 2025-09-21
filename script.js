async function loadStandings() {
    try {
        const url = "https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2021-2022";
        const response = await fetch(url)
        const data = await response.json()
        if (!data.table) {
            throw new Error("No data found")
        }
        console.log(data)

        const tableBody = document.getElementById("standingsTable_body")
        tableBody.innerHTML = ""

        data.table.forEach((team, index) => {
            let row = `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${team.StrBadge}"></td>
                <td>${team.StrTeam}</td>
                <td>${team.intWin}</td>
                <td>${team.intDraw}</td>
                <td>${team.intLoss}</td>
                <td>${team.intPlayed}</td>
                <td>${team.intGoalsFor}</td>
            </tr>
            `
            tableBody.insertAdjacentHTML("beforeend", row)
        });
    } catch (err) {
        console.error("Error loading standings:", err)
    }
}

loadStandings()