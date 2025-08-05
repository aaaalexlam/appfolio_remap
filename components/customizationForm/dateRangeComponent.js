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
    let dateRange = {
        "startDate": "",
        "endDate": ""
    }
    if (document.getElementById(`${tablePrefix}date_range_radio`).checked) {

        dateRange.startDate = `${document.getElementById(`${tablePrefix}date_range_input_from`).value}`;
        dateRange.endDate = `${document.getElementById(`${tablePrefix}date_range_input_to`).value}`

        return dateRange;
    }
    return dateRangeConvertor(document.getElementById(`${tablePrefix}date_range_selector`).value);
}

function formartDateRange (value) {

}
function dateRangeConvertor(value) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const dayOfWeek = today.getDay();
    const result = { startDate: "", endDate: "" };

    const formatDate = (date) =>
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const cloneDate = (d) => new Date(d.getTime());

    const getQuarter = (m) => Math.floor(m / 3);

    const setStartEnd = (start, end = today) => {
        result.startDate = formatDate(start);
        result.endDate = formatDate(end);
    };

    switch (value) {
        case "today":
        case "yesterday": {
            const date = cloneDate(today);
            if (value === "yesterday") date.setDate(date.getDate() - 1);
            setStartEnd(date, date);
            break;
        }

        case "thisWeek": {
            const start = cloneDate(today);
            start.setDate(today.getDate() - dayOfWeek);
            const end = cloneDate(start);
            end.setDate(start.getDate() + 6);
            setStartEnd(start, end);
            break;
        }

        case "thisWeekToDate": {
            const start = cloneDate(today);
            start.setDate(today.getDate() - dayOfWeek);
            setStartEnd(start);
            break;
        }

        case "thisMonth":
            setStartEnd(new Date(year, month, 1), new Date(year, month + 1, 0));
            break;

        case "thisMonthToDate":
            setStartEnd(new Date(year, month, 1));
            break;

        case "thisQuarter":
        case "thisQuarterToDate": {
            const quarter = getQuarter(month);
            const start = new Date(year, quarter * 3, 1);
            const end = value === "thisQuarter"
                ? new Date(year, quarter * 3 + 3, 0)
                : today;
            setStartEnd(start, end);
            break;
        }

        case "thisYearToDate":
            setStartEnd(new Date(year, 0, 1));
            break;

        case "lastYear":
            setStartEnd(new Date(year - 1, 0, 1), new Date(year - 1, 11, 31));
            break;

        case "last7Days":
            setStartEnd(new Date(today.setDate(today.getDate() - 6)), new Date());
            break;

        case "lastWeek": {
            const thisMonday = cloneDate(today);
            thisMonday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
            const lastMonday = cloneDate(thisMonday);
            lastMonday.setDate(thisMonday.getDate() - 7);
            const lastSunday = cloneDate(lastMonday);
            lastSunday.setDate(lastMonday.getDate() + 6);
            setStartEnd(lastMonday, lastSunday);
            break;
        }

        case "lastWeekToDate": {
            const thisMonday = cloneDate(today);
            thisMonday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
            const lastMonday = cloneDate(thisMonday);
            lastMonday.setDate(thisMonday.getDate() - 7);
            const lastSameWeekday = cloneDate(today);
            lastSameWeekday.setDate(today.getDate() - 7);
            setStartEnd(lastMonday, lastSameWeekday);
            break;
        }

        case "lastMonth":
        case "lastMonthToDate": {
            let prevMonth = month - 1;
            let prevYear = year;
            if (prevMonth < 0) {
                prevMonth = 11;
                prevYear--;
            }
            const start = new Date(prevYear, prevMonth, 1);
            const end = value === "lastMonthToDate" ? today : new Date(prevYear, prevMonth + 1, 0);
            setStartEnd(start, end);
            break;
        }

        case "lastQuater":
        case "lastQuaterToDate": {
            let quarter = getQuarter(month) - 1;
            let qYear = year;
            if (quarter < 0) {
                quarter = 3;
                qYear--;
            }
            const start = new Date(qYear, quarter * 3, 1);
            const end = value === "lastQuaterToDate" ? today : new Date(qYear, quarter * 3 + 3, 0);
            setStartEnd(start, end);
            break;
        }

        case "last30Days":
        case "last60Days":
        case "last90Days": {
            const days = parseInt(value.replace("last", "").replace("Days", ""), 10);
            const start = new Date(today);
            start.setDate(today.getDate() - days + 1);
            setStartEnd(start, today);
            break;
        }

        case "trailing12Month": {
            let trailingMonth = month - 11;
            let trailingYear = year;
            if (trailingMonth < 0) {
                trailingMonth += 12;
                trailingYear--;
            }
            setStartEnd(new Date(trailingYear, trailingMonth, 1));
            break;
        }

        case "next7Days":
        case "next30Days":
        case "next60Days":
        case "next90Days": {
            const days = parseInt(value.replace("next", "").replace("Days", ""), 10);
            const start = new Date(today);
            start.setDate(today.getDate() + 1);
            const end = new Date(today);
            end.setDate(today.getDate() + days);
            setStartEnd(start, end);
            break;
        }

        case "nextWeek": {
            const thisMonday = cloneDate(today);
            thisMonday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
            const nextMonday = cloneDate(thisMonday);
            nextMonday.setDate(thisMonday.getDate() + 7);
            const nextSunday = cloneDate(nextMonday);
            nextSunday.setDate(nextMonday.getDate() + 6);
            setStartEnd(nextMonday, nextSunday);
            break;
        }

        case "nextMonth": {
            let nextMonth = month + 1;
            let nextYear = year;
            if (nextMonth > 11) {
                nextMonth = 0;
                nextYear++;
            }
            setStartEnd(new Date(nextYear, nextMonth, 1), new Date(nextYear, nextMonth + 1, 0));
            break;
        }

        case "nextQuarter": {
            let nextQuarter = getQuarter(month) + 1;
            let qYear = year;
            if (nextQuarter > 3) {
                nextQuarter = 0;
                qYear++;
            }
            const start = new Date(qYear, nextQuarter * 3, 1);
            const end = new Date(qYear, nextQuarter * 3 + 3, 0);
            setStartEnd(start, end);
            break;
        }

        case "until1WeekAgo": {
            const end = cloneDate(today);
            end.setDate(end.getDate() - 7);
            setStartEnd(new Date(1970, 0, 1), end);
            break;
        }

        case "until1MonthAgo": {
            const end = cloneDate(today);
            end.setMonth(end.getMonth() - 1);
            setStartEnd(new Date(1970, 0, 1), end);
            break;
        }

        case "untilToday":
        case "allTime": {
            setStartEnd(new Date(1970, 0, 1));
            break;
        }

        default:
            throw new Error("Unsupported value: " + value);
    }

    return result;
}
