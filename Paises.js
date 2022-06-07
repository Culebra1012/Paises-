const paises = [
    {
      nombre: 'pais 1',
      armamento: 3123412,
      asesoria: 2523450,
      alimentos: 1254500,
      personalM: 1875000,
      entrenamiento: 123412,
      diplomacia: 1875000,
      migracion: 1234,
    },
    {
      nombre: 'pais 2',
      armamento: 234234,
      asesoria: 56346,
      alimentos: 223000,
      personalM: 15200,
      entrenamiento: 75400,
      diplomacia: 15200,
      migracion: 5674,
    },
    {
      nombre: 'pais 3',
      armamento: 346000,
      asesoria: 346534,
      alimentos: 12500,
      personalM: 178000,
      entrenamiento: 78000,
      diplomacia: 178000,
      migracion: 567,
    },
    {
      nombre: 'pais 4',
      armamento: 123400,
      asesoria: 65200,
      alimentos: 54000,
      personalM: 97500,
      entrenamiento: 263000,
      diplomacia: 97500,
      migracion: 90,
    },
    {
      nombre: 'pais 30',
      armamento: 3485,
      asesoria: 22560,
      alimentos: 27845,
      personalM: 59000,
      entrenamiento: 634234,
      diplomacia: 59000,
      migracion: 235,
    },
  ];
  
  
  function totalAyudas(paises) {
    let totalAyudasPaises = 0;
  
    for (const pais of paises) {
      totalAyudasPaises =
        pais.armamento +
        pais.asesoria +
        pais.alimentos +
        pais.personalM +
        pais.entrenamiento +
        pais.diplomacia +
        pais.migracion;
      console.log(
        `El total de ayuda del ${pais.nombre} fue de ${totalAyudasPaises}`
      );
    }
  }
  
  function menorAyudaPaises(paises) {
    let paisesValores = [];
    paises.map((pais) => {
      paisesValores.push(pais.armamento);
      paisesValores.push(pais.asesoria);
      paisesValores.push(pais.alimentos);
      paisesValores.push(pais.personalM);
      paisesValores.push(pais.entrenamiento);
      paisesValores.push(pais.diplomacia);
      paisesValores.push(pais.migracion);
    });
  
    let valorMinimo = Math.min(...paisesValores);
    let paisConMenorGasto = paises.find(
      (pais) =>
        pais.armamento === valorMinimo ||
        pais.asesoria === valorMinimo ||
        pais.alimentos === valorMinimo ||
        pais.personalM === valorMinimo ||
        pais.entrenamiento === valorMinimo ||
        pais.diplomacia === valorMinimo ||
        pais.migracion === valorMinimo
    );
    console.log(
      `El pais con menor gasto en una de sus ayudas fue ${
        paisConMenorGasto.nombre
      } en ${Object.keys(paisConMenorGasto).find(
        (key) => paisConMenorGasto[key] === valorMinimo
      )} y fue de ${valorMinimo}`
    );
  }
  
  function mayorAsistenciaMigrantes(paises) {
    let valorMaximoAporteMigracionPais = Math.max(
      ...paises.map((pais) => pais.migracion)
    );
  
    let paisConMaximoAporteMigracion = paises.find(
      (pais) => pais.migracion === valorMaximoAporteMigracionPais
    );
    console.log(
      `El ${paisConMaximoAporteMigracion.nombre} fue el que hizo un mayor aporte a migración con un total de ${paisConMaximoAporteMigracion.migracion}`
    );
  }
  
  console.log(menorAyudaPaises(paises));
  console.log(totalAyudas(paises));
  console.log(mayorAsistenciaMigrantes(paises));
  