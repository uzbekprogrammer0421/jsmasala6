// 1-task
// let obj = {name: "Asilbek", age: 20, addres: "UZB"}
// const save_obj_values = (params)=>{
//     let values = []
//     for (let key in params ){
//         values.push(params[key])
//     }
//     console.log(values);
// }
// save_obj_values(obj)
// const save_obj_keys = (params)=>{
//     let keys = []
//     for (let key in params ){
//         keys.push(key)
//     }
//     console.log(keys);
// }
// save_obj_keys(obj)







// 2-task
// function arr(...params) {
//     let massiv = [2, 4, 6, 7, 8]
//      for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] == params) {
//             console.log("Ichida mavjud")
//         }
//         else{
//             console.log("Ichida mavjud emas");
//         }
//     }
// }
// arr(4)




// 3-task 
// function arr(...params) {
//     let total = 0
//     let massiv = ["olma", "davlat", "xalq", "dasturchi", "dasturlash", "google", "boolean"]
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] == params) {
//             total ++
//             console.log("Ichida mavjud");
//         }
//     }
//     if (total == 0) {
//         console.log("Ichida mavjud emas");
//     }
// }
// arr("dasturchi")




// 4-task
// function arr(...params) {
//     let total = 0
//     let massiv = ["olma", "davlat", "xalq", "dasturchi", "dasturlash", "google", "boolean"]
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] == params) {
//             total++
//             console.log(i);
//         }
//     }
//     if (total == 0) {
//         console.log("Ichida mavjud emas");
//     }
// }
// arr("dasturlash")



// 5-task
// const values_1 = {values_1_a: 21, values_1_b: 5, values_1_c: 2004}
// const values_2 = {values_2_a: 2, values_2_b: 51, values_2_c: 2}
// const values_3 = {values_3_a: 1, values_3_b: 55, values_3_c: 204}
// const values_total = Object.assign(values_1, values_2, values_3)
// console.log(values_total);
// 6-task
// 6-task 1-qism
// const values_1 = {values_1_a: 21, values_1_b: 5, values_1_c: 2004}
// const values_2 = {values_2_a: 2, values_2_b: 51, values_2_c: 2}
// const values_total = Object.assign(values_1, values_2)
// console.log(values_total);


// // 6-task 2-qism

// const save_obj_keys = (params)=>{
//     let keys = []
//     for (let key in params ){
//         keys.push(key)
//     }
//     console.log(keys);
// }
// save_obj_keys(values_total)

// // 6-task 3-qism


// const save_obj_values = (params)=>{
//     let values = []
//     for (let key in params ){
//         values.push(params[key])
//     }
//     console.log(values);
// }
// save_obj_values(values_total)

// // // 6-task 4-qism

// const save_obj_total = (params)=>{
//     let total = 0
//     for (let key in params ){
//         total = total + params[key]
//     }
//     console.log(total);
// }
// save_obj_values(values_total)