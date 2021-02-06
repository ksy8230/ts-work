(function () {
    /**
     * Enum
     */
    // 여러가지 값들을 한 곳에 모아서 타이핑하는 것
    // Javascript
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 10;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    var DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    // Typescript
    var Days;
    (function (Days) {
        Days[Days["Monday"] = 0] = "Monday";
        Days[Days["Tuesday"] = 1] = "Tuesday";
        Days[Days["Wednesday"] = 2] = "Wednesday";
        Days[Days["Thursday"] = 3] = "Thursday";
        Days[Days["Friday"] = 4] = "Friday";
        Days[Days["Saturday"] = 5] = "Saturday";
        Days[Days["Sunday"] = 6] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days.Monday);
    var day = Days.Wednesday;
    day = Days.Sunday;
    console.log(10);
});
