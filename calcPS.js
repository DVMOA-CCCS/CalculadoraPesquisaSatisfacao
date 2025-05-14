function calcularAmostra() {
      const N = parseInt(document.getElementById("atendimentos").value);

      if (isNaN(N) || N <= 0) {
        document.getElementById("amostra").innerText = "0";
        return;
      }

      // Parâmetros fixos
      const z = 1.96;
      const p = 0.5;
      const q = 1 - p;
      const e = N <= 500 ? 0.10 : 0.05;

      // Cálculo
      const numerador = N * Math.pow(z, 2) * p * q;
      const denominador = ((N - 1) * Math.pow(e, 2)) + (Math.pow(z, 2) * p * q);
      const n = numerador / denominador;

      document.getElementById("amostra").innerText =
        `${Math.ceil(n)}`;
    }