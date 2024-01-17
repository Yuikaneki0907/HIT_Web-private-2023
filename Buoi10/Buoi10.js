let chon = prompt("Nhap lua chon."
    + "\n\t1. Trung bình cộng"
    + "\n\t2.Nhà huấn luyện chó tài ba");

if (chon == 1) {
    let age_cat = [2, 5, 7, 1, 4, 3, 2, 5, 8, 9];
    const getAgeUses = arr => {
        let age_uses = [];
        let lengthArr = arr.length;
        for (let i = 0; i < lengthArr; i++) {
            if (arr[i] <= 2) {
                age_uses[i] = arr[i] * 2;
            } else {
                age_uses[i] = arr[i] * 4 + 16;
            }
        }
        return age_uses;
    }
    const age_uses = getAgeUses(age_cat);
    console.log(age_uses);

    const getAgeAdult = arr => {
        let lengthArr = arr.length;
        let ageAdult = [];
        let index = 0;
        for (let i = 0; i < lengthArr; i++) {
            if (arr[i] >= 18) {
                ageAdult[index] = arr[i];
                index++;
            }
        }
        return ageAdult;
    }
    const ageAdult = getAgeAdult(age_uses);
    console.log(ageAdult);

    const TBC = arr => {
        let sum = 0;
        let lengthArr = arr.length;
        for (let i = 0; i < lengthArr; i++) {
            sum += arr[i];
        }
        return sum / lengthArr;
    }
    console.log(TBC(ageAdult));
}
else if (chon == 2) {
    const dogs = [
        { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
        { weight: 8, curFood: 200, owners: ["Matilda"] },
        { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
        { weight: 32, curFood: 340, owners: ["Michael"] },
    ];
    const recommendedFood = obj => {
        let rf = [];
        let lengthObj = obj.length;
        for (let i = 0; i < lengthObj; i++) {
            rf[i] = Math.round(obj[i].weight ** 0.75 * 28);
        }
        return rf;
    }
    const rf = recommendedFood(dogs);
    console.log(rf);

    //xet xem an chinh xac luong thuc an k?
    const getAccuracy = (arr, obj) => {
        let lengthArr = arr.length;
        let checkAccuracy = [];
        for (let i = 0; i < lengthArr; i++) {
            if (arr[i] == obj[i].curFood) {
                checkAccuracy[i] = true;
            } else {
                checkAccuracy[i] = false;
            }
        }
        return checkAccuracy;
    }
    const checkAccuracy = getAccuracy(rf, dogs);
    console.log(checkAccuracy);

    //xet xem an du luong thuc an k?
    const getFill = (arr, obj) => {
        let lengthArr = arr.length;
        let checkFill = [];
        for (let i = 0; i < lengthArr; i++) {
            if (arr[i] * 0.9 < obj[i].curFood) {
                checkFill[i] = false;
            } else if (arr[i] * 1.1 > obj[i].curFood) {
                checkFill[i] = false;
            } else {
                return true;
            }
        }
        return checkFill;
    }
    const checkFill = getFill(rf, dogs);
    console.log(checkFill);

    const sarahDog = dogs.find((dog) => {
        return dog.owners.includes("Sarah");
    });
    console.log(sarahDog);

    const sortFood = arr =>{
        arr.sort((a,b)=>a-b);
        return arr;
    }
    console.log(sortFood(rf));
}