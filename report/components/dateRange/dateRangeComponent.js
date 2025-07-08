const dateRangeOptions = [
    {
        "displayName": "Today",
        "value": "today"
    },
    {
        "displayName": "This Week",
        "value": "thisWeek"
    },
    {
        "displayName": "This Week-to-date",
        "value": "thisWeekToDate"
    },
    {
        "displayName": "This Month",
        "value": "thisMonth"
    },
    {
        "displayName": "This Month-to-date",
        "value": "thisMonthToDate"
    },
    {
        "displayName": "This Quarter",
        "value": "thisQuarter"
    },
    {
        "displayName": "This Quarter-to-date",
        "value": "thisQuarterToDate"
    },
    {
        "displayName": "This Year-to-date",
        "value": "thisYearToDate"
    },
    {
        "displayName": "Last Year",
        "value": "lastYear"
    },
    {
        "displayName": "Yesteraday",
        "value": "yesterday"
    },
    {
        "displayName": "Last Week",
        "value": "lastWeek"
    },
    {
        "displayName": "Last Week-to-date",
        "value": "lastWeekToDate"
    },
    {
        "displayName": "Last Month",
        "value": "lastMonth"
    },
    {
        "displayName": "Last Month-to-date",
        "value": "lastMonthToDate"
    },
    {
        "displayName": "Last Quater",
        "value": "lastQuater"
    },
    {
        "displayName": "Last Quater-to-date",
        "value": "lastQuaterToDate"
    },
    {
        "displayName": "Last 7 Days",
        "value": "last7Days"
    },
    {
        "displayName": "Last 30 Days",
        "value": "last30Days"
    },
    {
        "displayName": "Last 60 Days",
        "value": "last60Days"
    },
    {
        "displayName": "Last 90 Days",
        "value": "last90Days"
    },
    {
        "displayName": "Trailing 12 Month",
        "value": "trailing12Month"
    },
    {
        "displayName": "Next 7 Days",
        "value": "next7Days"
    },
    {
        "displayName": "Next 30 Days",
        "value": "next30Days"
    },
    {
        "displayName": "Next 60 Days",
        "value": "next60Days"
    },
    {
        "displayName": "Next 90 Days",
        "value": "next90Days"
    },
    {
        "displayName": "Next Week",
        "value": "nextWeek"
    },
    {
        "displayName": "Next Month",
        "value": "nextMonth"
    },
    {
        "displayName": "Next Quarter",
        "value": "nextQuarter"
    },
    {
        "displayName": "Until 1 Week ago",
        "value": "until1WeekAgo"
    },
    {
        "displayName": "Until 1 Month ago",
        "value": "until1MonthAgo"
    },
    {
        "displayName": "Until Today",
        "value": "untilToday"
    },
    {
        "displayName": "All Time",
        "value": "allTime"
    },
]

const createDateRangeHTML = (displayName, tablePrefix) => {
    // Get the last day of the current month
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Format to YYYY-MM-DD
    const formattedToday = today.toISOString().split("T")[0];
    const formattedFirstDay = firstDayOfMonth.toISOString().split("T")[0];

    const optionsHTML = dateRangeOptions
        .map(date => `<option value="${date.value}">${date.displayName}</option>`)
        .join("");

    return `
                <tr class="tr-default">
                    <td class="input_field" id="${tablePrefix}as_of_field">${displayName} <span style="color: red;">*</span></td>
                    <td class="input_column">
                        <input type="radio" class="dateRangeRadio" name="date_range_radio" id="${tablePrefix}date_range_radio" class="" checked>
                        <input type="date" id="${tablePrefix}date_range_input_from" value=${formattedFirstDay} class="dateRangeFrom" value="">
                        <div>To</div>
                        <input type="date" id="${tablePrefix}date_range_input_to" value=${formattedToday} class="dateRangeTo" value="">
                    </td>
                </tr>
                <tr class="tr-default">
                    <td class="input_field"></td>
                    <td class="input_column">
                        <input type="radio" class="dateRangeRadio" name="date_range_radio" id="${tablePrefix}date_range_selector_radio" class="">
                        <select name="" id="${tablePrefix}date_range_selector" class="dateRangeSelector" disabled>
                            ${optionsHTML}
                        </select>
                        </label>
                    </td>
                </tr>
    `;
}

function addDateRangeEventListener(tablePrefix) {
    const radios = document.getElementsByName("date_range_radio");
    const date_range_input_to = document.getElementById(`${tablePrefix}date_range_input_from`);
    const date_range_input_from = document.getElementById(`${tablePrefix}date_range_input_to`);
    const date_range_selector = document.getElementById(`${tablePrefix}date_range_selector`);

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                if (radio.id === `${tablePrefix}date_range_radio`) {
                    date_range_selector.disabled = true;
                    date_range_input_to.disabled = false;
                    date_range_input_from.disabled = false;
                } else if (radio.id === `${tablePrefix}date_range_selector_radio`) {
                    date_range_selector.disabled = false;
                    date_range_input_to.disabled = true;
                    date_range_input_from.disabled = true;
                }
            }
        });
    });
}


function getSelectedDateRange(tablePrefix) {
    console.log(document.getElementById(`${tablePrefix}date_range_radio`).checked)
    if (document.getElementById(`${tablePrefix}date_range_radio`).checked) {
        return `${document.getElementById(`${tablePrefix}date_range_input_from`).value} To ${document.getElementById(`${tablePrefix}date_range_input_to`).value}`
        
    }
    return document.getElementById(`${tablePrefix}date_range_selector`).value;
}