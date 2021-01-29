function mapToSquare (input) {
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input

    return input.map((number) => 
        Math.pow(number, 2)
    )
}

function convertTemperature (input) {
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9;
        return Number(cel.toFixed(1));
    }

    input.map((number) => 
        number['temperature'] = fah_to_celsius(number.temperature)
    )
    return input;
    // input.map((number) =>
    //     "date" + ":" + input['date'] +"," + "<br>" + fah_to_celsius(number.temperature) + ":"
    // )
    // return input

    // {
    //     "date": "2021-01-01",
    //     "temperature": 26.7
    //   },

    // input.map(number => number['temperature'] = fah_to_celsius(number.temperature))
    //     return input
    
}

function filterEvenNumber (input) {
    // TODO: filter input เอาเลขคู่เท่านั้น
    
    let result = input.filter(number =>
        number % 2 === 0
    )
    return result;
}

function filterAgeRange (input) {
    // TODO: กรอง input.people ตามช่วงอายุ

    let result = input.people.filter(number =>
        number.age >= input['min'] && number.age <= input['max']
    )
    return result;
}

function removeByFilter (input) {
    // TODO: ลบ Object ใน Array ด้วยการ filter
    let result = input.people.filter(number =>
        number.id !== input['removeId']
    )
    return result;
}