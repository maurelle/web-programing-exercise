function save () {
    // TODO: ให้ใช้ LocalStorage ในการบันทึก Array นี้ ด้วย key people
    const people = [
        { name: "Aariz Bennett", age: 24 },
        { name: "Najma Shaffer", age: 17 },
        { name: "Jill Schmitt", age: 32 },
        { name: "Anita Rose", age: 44 },
    ]
    let jsstring = JSON.stringify(people);
    localStorage.setItem("people", jsstring); //people = key, jsstring = value
}

function read () {
    // TODO: อ่านค่า people จาก Local Storage
    return JSON.parse(localStorage.getItem("people"));
}

function remove () {
    // TODO: ลบ people จาก Local Storage
    return localStorage.removeItem("people"); //people = key
}