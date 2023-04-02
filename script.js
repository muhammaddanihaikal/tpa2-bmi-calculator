function hitungBMI() {
  // ambil nilai berat dan tinggi
  let berat = document.getElementById("berat").value;
  let tinggi = document.getElementById("tinggi").value;

  // hitung bmi pake rumus
  let bmi = berat / Math.pow(tinggi / 100, 2);
  console.log(berat);
  console.log(tinggi);
  console.log(bmi);

  // BMI Categories:
  // Underweight = <18.5
  // Normal weight = 18.5 – 24.9
  // Overweight = 25 – 29.9
  // Obesity = BMI of 30 or greater

  // tentukan kategorinya
  let kategori = "";
  if (bmi < 18.5) {
    kategori = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    kategori = "Overweight";
  } else {
    kategori = "Obesity";
  }

  // tampilkan outputnya
  // hasil BMI
  document.getElementById("hasil").innerHTML = bmi.toFixed(1);

  // hasil kategori
  document.getElementById("kategori").innerHTML = kategori;
}
