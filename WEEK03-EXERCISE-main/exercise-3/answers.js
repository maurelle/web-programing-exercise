function getDayName (input) {
    // input เป็นเลข 0-6
    // TODO: แปลงเลข 0-6 เป็น วันอาทิตย์ - วันเสาร์

    // hint
    // const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', /*...*/]
    const daysInWeek = ["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];
    return daysInWeek[input];
    // if (input == 0){
    //     return "วันอาทิตย์";
    // }
    // if (input == 1){
    //     return "วันจันทร์";
    // }
    // if (input == 2){
    //     return "วันอังคาร";
    // }
    // if (input == 3){
    //     return "วันพุธ";
    // }
    // if (input == 4){
    //     return "วันพฤหัสบดี";
    // }
    // if (input == 5){
    //     return "วันศุกร์";
    // }
    // if (input == 6){
    //     return "วันเสาร์";
    // }
}

function formatDate (input) {
    // input เป็น Object ในรูปแบบ
    // {
    //     day: 6, // 0=วันอาทิตย์, 1=วันจันทร์, 2=วันอังคาร, ...
    //     date: 15, // วันที่ 1-31
    //     month: 0, // 0=มกราคม, 1=กุมภาพันธ์, ... 
    //     year: 2021 // ปี
    // }
    // TODO: แปลง input เป็น String ในรูปแบบ "วันศุกร์ที่ 15 มกราคม พ.ศ. 2564"

    days = ["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];
    months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    if (input['day'] == 5){
        return days[5] + "ที่ " + input['date'] + " " + months[0] + " พ.ศ. " + (input['year'] + 543);
    }
    if (input['day'] == 0){
        return days[0] + "ที่ " + input['date'] + " " + months[7] + " พ.ศ. " + (input['year'] + 543);
    }
    if (input['day'] == 1){
        return days[1] + "ที่ " + input['date'] + " " + months[7] + " พ.ศ. " + (input['year'] + 543);
    }
    if (input['day'] == 2){
        return days[2] + "ที่ " + input['date'] + " " + months[7] + " พ.ศ. " + (input['year'] + 543);
    }
    if (input['day'] == 3){
        return days[3] + "ที่ " + input['date'] + " " + months[7] + " พ.ศ. " + (input['year'] + 543);
    }
    if (input['day'] == 4){
        return days[4] + "ที่ " + input['date'] + " " + months[7] + " พ.ศ. " + (input['year'] + 543);
    }
}
function findTotal (input) {
    // input เป็น array ของตัวเลข
    // TODO: ให้หาผลบวกของเลขทั้งหมดใน input
    let result = input.reduce((accumulator, current) => accumulator + current);
    return result;
}

function findMinMax (input) {
    // input เป็น array ของตัวเลข
    // TODO: ให้หาตัวเลขที่มากที่สุดและน้อยที่สุดใน input
    let maxItem = input.reduce((a, b) => Math.max(a, b));
    let minItem = input.reduce((a, b) => Math.min(a, b));
    return {
        "min": minItem,
        "max": maxItem
    }
}

function findBMI (input) {
    // กำหนดให้ input เป็น Array ของ Object ในรูปแบบ
    // [
    //     {
    //         name: "ABC DEF", // ชื่อ นามสกุล
    //         height: 167, // ความสูง มีหน่วยเป็น cm
    //         weight: 72 // น้ำหนัก มีหน่วยเป็น kg
    //     },
    //     {
    //         name: "XYZ DEF", // ชื่อ นามสกุล
    //         height: 194, // ความสูง มีหน่วยเป็น cm
    //         weight: 60 // น้ำหนัก มีหน่วยเป็น kg
    //     },
    //     ...
    // ]
    // TODO: ให้คำนวณดัชนีมวลการ (Body Mass Index, bmi) ของแต่ละคน
    
    input.forEach(information => {
        information.bmi = (information.weight / Math.pow((information.height / 100), 2)).toFixed(2)
        
    });
    return input;
}
