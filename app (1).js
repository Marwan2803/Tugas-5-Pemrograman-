const express = require("express");
const { persegi, persegiPanjang, segitiga } = require("./modules/shape");
const app = express();
const port = 3000;

app.get("/bangun-ruang", (req, res) => {
  const shape = req.query.shape;
  const action = req.query.action;
  const alas = parseInt(req.query.alas);
  const tinggi = parseInt(req.query.tinggi);
  const sisiA = parseInt(req.query.sisiA);
  const sisiB = parseInt(req.query.sisiB);
  const sisiC = parseInt(req.query.sisiC);
  const sisi = parseInt(req.query.sisi);
  const panjang = parseInt(req.query.panjang);
  const lebar = parseInt(req.query.lebar);

  if (shape === "segitiga" && action === "luas") {
    res.send(
      `Alas: ${alas}<br>Tinggi: ${tinggi}<br>Luas segitiga: ${segitiga.luas(
        alas,
        tinggi
      )}`
    );
  } else if (shape === "segitiga" && action === "keliling") {
    res.send(
      `Sisi A: ${sisiA}<br>Sisi B: ${sisiB}<br>Sisi C: ${sisiC}<br>Keliling segitga: ${segitiga.keliling(
        sisiA,
        sisiB,
        sisiC
      )}`
    );
  }

  if (shape === "persegi" && action === "luas") {
    res.send(`Sisi: ${sisi}<br>Luas persegi: ${persegi.luas(sisi)}`);
  } else if (shape === "persegi" && action === "keliling") {
    res.send(`Sisi: ${sisi}<br>Keliling persegi: ${persegi.keliling(sisi)}`);
  }

  if (shape === "persegi panjang" && action === "luas") {
    res.send(
      `Panjang: ${panjang}<br>Lebar: ${lebar}<br>Luas persegi panjang: ${persegiPanjang.luas(
        panjang,
        lebar
      )}`
    );
  } else if (shape === "persegi panjang" && action === "keliling") {
    res.send(
      `Panjang: ${panjang}<br>Lebar: ${lebar}<br>Keliling persegi panjang: ${persegiPanjang.keliling(
        panjang,
        lebar
      )}`
    );
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
