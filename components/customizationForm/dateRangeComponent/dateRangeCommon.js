const radioDateRangeEnableCss = "h-[35px] border-1 w-full  cursor-pointer p-1"
const radioDateRangeDisableCss = "h-[35px] border-1 w-full bg-gray-200 p-1"

const dageRangeSelectorDisableCss = "h-[35px] border-1 w-full bg-gray-200 p-1";
const dageRangeSelectorEnableCss = "h-[35px] border-1 w-full cursor-pointer p-1";

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