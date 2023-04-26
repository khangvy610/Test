// For example arr = [1, 3, 5, 7, 9]
// 1.Mini-Max Sum
// 2.Count total of array
// 3.Find min in array
// 4.Find max in array
// 5.Find old elements in array
// 6.Find even elements in array

import React from 'react'

export default function algorithm() {
    let myarr =[1,2,3,4,5]

    // 1. Mini-Max Sum
    let min = myarr[0]
    let max = 0
    let total = 0 
    for(let i =0; i<myarr.length;i++){
        total +=myarr[i]
        if(myarr[i] > max){
            max = myarr[i]
          }
          if(myarr[i]< min){
            min = myarr[i]
          }
          console.log("Min:",total-max);
          console.log("Max:",total-min);

          console.log("Count:",myarr.length); //2. Count total of array

          console.log("Min Array:",min); //3. Find min array

          console.log("Max Array:",max); //4. Find max array
    }
    // 5. Old even elements in array
    myarr.forEach(n=>{
      if((n % 2)!=0){
        console.log("OldInArray:",n);
      }
    })
    // 6. Find even elements in array
      myarr.forEach(n=>{
        if((n % 2)===0){
          console.log("EvenInArray:",n);
        }
      })
    return (
    <div>algorithm</div>
  )
}
