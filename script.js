"use strict";

function Studentas(id, vardas, pavarde, pazymys, lankomumas, data) {
    this.id = id;
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.pazymys = pazymys;
    this.lankomumas = lankomumas;
    this.data = data;
};

let Studentai = [];

for (let i = 0; i < 20; i++) {
    let id = i + 1;
    let vardas = "Vardas" + (i + 1);
    let pavarde = "Pavardė" + (i + 1);

    let min = 1;
    let max = 10;
    let pazymys = Math.floor(Math.random() * (max - min + 1) + min);

    let lankomumas = [];
    for (let j = 0; j < 20; j++) {
        if (Math.random() < 0.5) {
            lankomumas[j] = "x";
        } else {
            lankomumas[j] = "n";
        }
    }

    let data = new Date().toISOString().substring(0, 10);

    Studentai[i] = new Studentas(id, vardas, pavarde, pazymys, lankomumas, data);
}

console.log(Studentai);

let Klase = {
    Studentai: Studentai,
    vidurkis: function() {
        let suma = 0;
        for (let i in this.Studentai) {
            suma += this.Studentai[i].pazymys;
        }
        return suma / this.Studentai.length;
    }
};

console.log(Klase);
console.log(Klase.vidurkis());

for (let i in Studentai) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = Studentai[i].vardas + " " + Studentai[i].pavarde;
    tr.appendChild(td);
    for (let j in Studentai[i].lankomumas) {
        let td1 = document.createElement("td");
        td1.textContent = Studentai[i].lankomumas[j];
        tr.appendChild(td1);
    }
    document.getElementById("studentai").appendChild(tr);
}
