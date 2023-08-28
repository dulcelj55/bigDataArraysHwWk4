// const peopleArray = [
//     { name: 'Alice', age: 28 },
//     { name: 'Bob', age: 32 },
//     { name: 'Charlie', age: 24 },
//     { name: 'David', age: 29 },
//     { name: 'Ella', age: 22 },
//     { name: 'Frank', age: 45 },
//     { name: 'Grace', age: 19 },
//     { name: 'Henry', age: 37 },
//     { name: 'Isabel', age: 31 },
//     { name: 'Jack', age: 26 },
//     { name: 'Katherine', age: 29 },
//     { name: 'Liam', age: 40 },
//     { name: 'Mia', age: 18 },
//     { name: 'Noah', age: 33 },
//     { name: 'Olivia', age: 27 },
//     { name: 'Paul', age: 52 },
//     { name: 'Quinn', age: 23 },
//     { name: 'Rachel', age: 30 },
//     { name: 'Samuel', age: 35 },
//     { name: 'Taylor', age: 21 }
//   ];

//Task 0
//   returnYoungPeople = (array) => {
//     let youngPeople = array.filter((array) => {
//         if (array.age < 35){
//             return true
//     }else {
//         return false
//     }
    
//     })
//     console.log(youngPeople);
// };
//   returnYoungPeople(peopleArray)


// Task 1
//   totalOfAges = (array) => {
//    let total = 0;  
//    array.forEach((array) => {
//     total += array.age
//    })
    // console.log(total)
// };
//   totalOfAges(peopleArray)

// const usersArray = [
//     { username: 'alice123', points: 120 },
//     { username: 'bob456', points: 95 },
//     { username: 'charlie789', points: 200 },
//     { username: 'david987', points: 50 },
//     { username: 'emma321', points: 350 },
//     { username: 'frank567', points: 80 },
//     { username: 'grace234', points: 270 },
//     { username: 'harry890', points: 150 },
//     { username: 'isabel432', points: 420 },
//     { username: 'jack654', points: 30 }
//   ];

//Task 2
//   addPointsToAll = (array, pointsAdded) => {
//     array.forEach((array) => {
//     array.points = array.points + pointsAdded
//     return array
//   })
// console.log (array)
  
// };
//  addPointsToAll(usersArray, 10)
  

//Task 4
//  addPointsToOneUser = (nameOfUser, points) => {
//     usersArray.forEach((usersArray) => {
//         if (usersArray.username === nameOfUser){
//             usersArray.points = usersArray.points + points
//         }
// return usersArray.points
//     })
// console.log(usersArray)
//  };
//  addPointsToOneUser("isabel432", 90)