let chon = prompt("1. BMI \n2.Xuat mang sau khi cong 1 \n3.Vi tri 2 so tong bang target \n4. Tam giac pascal \n5.Di chuyen so 0");

if (chon == 1) {
    function calcBMI() {
        return this.weight / this.height ** 2;
    }
    const person1 = {
        fullName: "Person 1",
        height: 1.7,
        weight: 65,
        BMI: function () {
            return person1.weight / person1.height ** 2;
        },
    };
    const person2 = {
        fullName: "Person 2",
        height: 1.75,
        weight: 65,
        BMI: function () {
            return person2.weight / person2.height ** 2;
        },
    };
    console.log(`${person1.fullName}'s BMI: ${person1.BMI().toFixed(2)}`);
    console.log(`${person2.fullName}'s BMI: ${person2.BMI().toFixed(2)}`);
    if (person1.BMI() > person2.BMI()) {
        console.log(`${person1.fullName} has BMI greater.`);
    } else {
        console.log(`${person2.fullName} has BMI greater.`);
    }
}

else if (chon == 2) {
    function _2(number) {
        ++number;
        number = number + " ";
        // number.trim();
        return (number.trim()).split("");
    }
    var number = prompt('Nhap so: ');
    console.log(_2(number));
}

else if (chon == 3) {
    const number = [3, 2, 4];
    let target = 6;
    for (let i = 0; i < number.length - 1; i++) {
        let ss = number[i] + number[i + 1];
        if (ss == target) {
            console.log(number[i] + " + " + number[i + 1] + " = " + target);
        }
    }
}

else if (chon == 4) {
    const n = 7;
    function pascalTriangle(n) {
        const result = [[1]];
        if (n == 1) return result;
        for (let i = 1; i < n; i++) {
            const preRow = result[i - 1];
            const curRow = [1];
            for (let j = 1; j < i; j++) {
                curRow.push(preRow[j - 1] + preRow[j]);
            }
            curRow.push(1);
            result.push(curRow);
        }
        return result;
    }
    console.log(pascalTriangle(n));
}

else {
    const a = [0, 0, 1, 0, 0, 3, 12];
    const removeZero = (a) => {
        let i = 0;
        let k = a.length - 1;
        while (i < k) {
            if (a[i] == 0) {
                a.splice(i, 1);
                a.push(0);
                k--;
            } else i++;
        }
        return a;
    };

    console.log(removeZero(a));
}