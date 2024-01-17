let chon = prompt("1. Tim max \n2.Kiem tra canh tam giac \n3.Dem so ky tu tu cuoi \n4.Kiem tra doi xung \n5.Chen chuoi \n6.Tim UCLN va BCNN");

if (chon == 1) {
    let a = prompt("Nhap a=");
    let b = prompt("Nhap b=");
    let c = prompt("Nhap c=");
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    console.log("So lon nhat trong ba so la: ", max);
}

if (chon == 2) {
    let a = prompt("Nhap a=");
    let b = prompt("Nhap b=");
    let c = prompt("Nhap c=");
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log("Khong ton tai tam giac.");
    } else if ((a + b) <= c || (b + c) <= a || (c + a) <= b) {
        console.log("Khong ton tai tam giac.");
    } else {
        console.log("NULL")
    }
}

if (chon == 3) {
    let s = prompt("Nhap chuoi: ");
    s = s.trimEnd();
    let dem = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let a = s.charCodeAt(i);
        if ((a >= 65 && a <= 90) || (a > 97 && a < 122)) {
            dem++;
        } else if (a == 32) {
            break;
        } else {
            continue;
        }
    }
    console.log(dem);
    // console.log(s.length - (s.lastIndexOf(" ") + 1));
}

if (chon == 4) {
    let s = prompt("Nhap chuoi: ");
    let ss = '';
    for (let i = s.length - 1; i >= 0; i--) {
        ss = ss.concat(s.charAt(i));
    }
    if (s === ss) {
        console.log("Chuoi doi xung.");
    } else {
        console.log("Chuoi khong doi xung.");
    }
}

if (chon == 5) {
    let s1 = prompt("Nhap chuoi can chen: ");
    let s2 = prompt("Nhap chuoi bi chen: ");
    let p = prompt("Nhap vi tri muon chen: ");
    if (p <= 0) {
        console.log(s1.concat(s2));
    } else if (p >= s2.length) {
        console.log(s2.concat(s1));
    } else {
        console.log(s2.substring(0, p - 1).concat(s1).concat(s2.substring(p - 1)));
    }
}

if (chon == 6) {
    let a = prompt("Nhap a=");
    let b = prompt("Nhap b=");
    if (a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    a = Number(a);
    b = Number(b);
    let uc = 1;
    for (let i = a; i > 1; i--) {
        if (a % i == 0 && b % i == 0) {
            uc = i;
            break;
        }
    }
    console.log("UCLN: ", uc);

    let bc = a * b;
    for (let i = 2; i < a * b; i++) {
        if (i % a == 0 && i % b == 0) {
            bc = i;
            break;
        }
    }
    console.log("BCLN: ", bc);
}