(() => {
    const modelViewer = document.querySelector('#alfa_model');
    const orbitCycle = [
      '90deg 90deg 1m', // lewy bok
      '180deg 90deg 1m', // tył
      '270deg 90deg 1m', // prawy bok
      '360deg 90deg 1m' // front
      // modelViewer.cameraOrbit
    ];
  
    setInterval(() => {
      const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
      console.log(modelViewer.cameraOrbit)
      modelViewer.cameraOrbit =
          orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 3000);
  })();